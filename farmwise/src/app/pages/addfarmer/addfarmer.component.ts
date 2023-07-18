import { Component } from '@angular/core';
import { Database, set, ref, push, update, remove, get} from '@angular/fire/database';

@Component({
  selector: 'app-addfarmer',
  templateUrl: './addfarmer.component.html',
  styleUrls: ['./addfarmer.component.scss']
})
export class AddfarmerComponent {

  farmerData: any = {
    farmerId: null,
    farmerName: '',
    farmerAge: null,
    contactNumber: ''
  };

  constructor(public database: Database) {}

  addFarmer() {
    if (this.isValidFarmerData()) {
      const farmerIdRef = ref(this.database, 'NextFarmerId');
      get(farmerIdRef).then((snapshot) => {
        let farmerId = 101;
        if (snapshot.exists()) {
          farmerId = snapshot.val() + 1;
        }
        this.farmerData.farmerId = farmerId;
        set(ref(this.database, 'Farmer/' + farmerId), this.farmerData)
          .then(() => {
            alert('Farmer added successfully');
            this.clearForm();
            set(farmerIdRef, farmerId); // Update the NextFarmerId node
          })
          .catch((error) => {
            alert('Error adding farmer: ' + error);
          });
      });
    } else {
      alert('Invalid farmer data');
    }
  }

  private clearForm() {
    this.farmerData = {
      farmerId: null,
      farmerName: '',
      farmerAge: null,
      contactNumber: ''
    };
  }

  private isValidFarmerData(): boolean {
    return (
      this.farmerData.farmerName &&
      this.farmerData.farmerAge !== null &&
      this.farmerData.contactNumber
    );
  }
}