import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/Rx';
import { User } from '../../shared/models/user';

@Injectable()
export class ProfileService {
    static readonly PROFILE_COLLECTION_NAME = 'userProfiles';
    private userSource = new BehaviorSubject(new User());
    currUser = this.userSource.asObservable();

    constructor(
    ) {
    }

    async createProfile(email: string, userProfile): Promise<void> {
        const docRef = firebase.firestore().collection(ProfileService.PROFILE_COLLECTION_NAME).doc(email);
        userProfile.timestamp = firebase.firestore.FieldValue.serverTimestamp();

        try {
            this.userSource.next(userProfile);
            window.localStorage.setItem(email + '-profile', JSON.stringify(userProfile));
            return await docRef.set(userProfile, {merge: true});
        } catch (e) {
            throw e;
        }
    }

  async setupProfile(email: string): Promise<{ isRegistration: boolean; profile: any }> {
    try {
      const profile = await this.readProfileRemote(email);

      if (profile) {
        return {
          profile,
          isRegistration: false
        };
      } else {
        await this.createProfile(email, {email});

        return {
          profile,
          isRegistration: true
        };
      }
    } catch (e) {
      throw new Error('There was an error in fetching your user profile. Please contact us at christos@energyroll.co.uk');
    }
  }

  async readProfileRemote(email: string): Promise<firebase.firestore.DocumentData> {
    const docRef = firebase.firestore().collection(ProfileService.PROFILE_COLLECTION_NAME).doc(email);

    try {
      const doc = await docRef.get();

      if (doc.exists) {
        const profile = doc.data();
        this.userSource.next(profile as User);
        return profile;
      } else {
        this.userSource.next(null);
        return null;
      }
    } catch (e) {
      throw e;
    }
  }
}
