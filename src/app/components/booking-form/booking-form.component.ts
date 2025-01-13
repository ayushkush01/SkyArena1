import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'] // Note: Corrected 'styleUrl' to 'styleUrls'
})
export class BookingFormComponent {
  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';
  checkIn: string = '';
  checkOut: string = '';
  guests: number = 1;
  roomType: string = 'deluxe';
  formSubmitted: boolean = false;

  onSubmit(): void {
    this.formSubmitted = true;

    const bookingDetails = {
      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      guests: this.guests,
      roomType: this.roomType
    };

    // Save data to localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(bookingDetails);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    console.log('Booking Details Saved:', bookingDetails);
  }

  closeModal(): void {
    this.formSubmitted = false;
    // Optionally reset the form here after the success message.
    this.resetForm();
  }

  resetForm(): void {
    this.fullName = '';
    this.email = '';
    this.phoneNumber = '';
    this.checkIn = '';
    this.checkOut = '';
    this.guests = 1;
    this.roomType = 'deluxe';
  }
}
