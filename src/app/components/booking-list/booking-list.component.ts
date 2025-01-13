import { Component, OnInit } from '@angular/core';

interface Booking {
  fullName: string;
  email: string;
  phoneNumber: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  roomCost: number; // Room cost per guest
}

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[] = [];

  ngOnInit(): void {
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) {
      this.bookings = JSON.parse(storedBookings);
      console.log('Bookings loaded:', this.bookings);
    }
  }

  // Method to handle checkout and show the total bill
  checkout(booking: Booking): void {
    const totalCost = this.calculateTotalCost(booking);
    const checkoutDetails = `
      Full Name: ${booking.fullName}
      Email: ${booking.email}
      Phone Number: ${booking.phoneNumber}
      Room Type: ${booking.roomType}
      Check-In: ${booking.checkIn}
      Check-Out: ${booking.checkOut}
      Guests: ${booking.guests}
      Room Cost (per guest): ${booking.roomCost}
      Total Cost: ${totalCost}
    `;
    
    // Display the checkout details (you can replace this with a modal or alert)
    alert('Checkout Successful!\n' + checkoutDetails);
  }

  // Method to calculate total cost (room cost * guests)
  calculateTotalCost(booking: Booking): number {
    return booking.roomCost * booking.guests;
  }
}
  