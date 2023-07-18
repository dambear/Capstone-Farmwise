import { Component } from '@angular/core';
import { Database, ref, get, update, remove} from '@angular/fire/database';
import { Location } from '@angular/common';


@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss']
})
export class FarmerComponent {

  farmers: any[] = [];
  farmerData: any = {}; // Add this line to define the farmerData object

  constructor(public database: Database, private location: Location) {
    this.fetchFarmers();
  }

  fetchFarmers() {
    const farmersRef = ref(this.database, 'Farmer');
    get(farmersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.farmers = Object.values(snapshot.val());
        } else {
          this.farmers = [];
        }
      })
      .catch((error) => {
        console.error('Error retrieving farmers:', error);
      });
  }

  openUpdateFarmerModal(farmer: any) {
    // Set the farmer data in the component to be used in the modal form
    this.farmerData = { ...farmer };

    // Open the update farmer modal
    const modal = document.getElementById('updateFarmerModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  updateFarmer() {
    // Implement the update logic here
    // You can access the farmerData object and perform the necessary updates
    // For example, you can update the farmer's data in the database

    // Assuming you have a reference to the farmer's document in the database
    const farmerRef = ref(this.database, `Farmer/${this.farmerData.farmerId}`);

    // Update the farmer's data in the database
    update(farmerRef, {
      farmerName: this.farmerData.farmerName,
      farmerAge: this.farmerData.farmerAge,
      contactNumber: this.farmerData.contactNumber
    })
      .then(() => {
        alert('Farmer Data Updated successfully');
        // Optionally, you can fetch the updated data from the database
        this.fetchFarmers();
      })
      .catch((error) => {
        console.error('Error updating farmer:', error);
      });

    // Close the update farmer modal
    const modal = document.getElementById('updateFarmerModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  reloadPage() {
    window.location.reload();
  }


  removeFarmer(farmer: any) {
    const farmerRef = ref(this.database, 'Farmer/' + farmer.farmerId);
  
    remove(farmerRef)
      .then(() => {
        alert('Farmer deleted successfully');
        this.reloadPage()
      })
      .catch((error) => {
        alert('Error deleting farmer: ' + error);
      });
  }
  
}