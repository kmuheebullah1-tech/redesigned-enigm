// Interactive Menu Filtering & Booking Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Menu Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Booking Form Submission Simulation
    const bookingForm = document.getElementById('bookingForm');
    const successAlert = document.getElementById('successAlert');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            successAlert.classList.remove('d-none');
            bookingForm.reset();
            
            setTimeout(() => {
                successAlert.classList.add('d-none');
            }, 5000);
        });
    }
});
