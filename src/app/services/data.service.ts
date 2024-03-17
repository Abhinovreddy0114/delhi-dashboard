import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query, where } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }

  async getZones(){
    return(
      await getDocs(query(collection(this.firestore,'Zones')))
    ).docs.map((zones)=>zones.data());

  }
  async getWardsByZoneid(zoneId: number) {
    const q = query(collection(this.firestore, 'wards'), where('zoneid', '==', zoneId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }
  async getLocalitiesByWardid(wardid : number){
    const q = query(collection(this.firestore,'localities'),where('wardid','==',wardid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc =>doc.data());
  }
  async getStreetsByLocalityid(localityid : number){
    const q = query(collection(this.firestore,'streets'),where('localityid','==',localityid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc =>doc.data());
  }
  async getHousesByStreetId(streetid : number){
    const q = query(collection(this.firestore,'houses'),where('streetid','==',streetid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc =>doc.data());
  }

}
