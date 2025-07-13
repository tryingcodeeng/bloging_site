document.addEventListener('DOMContentLoaded', function() {
    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "The Hidden Beaches of Thailand",
            category: "DESTINATIONS",
            excerpt: "Discover the untouched beauty of Thailand's secret shores away from the tourist crowds.",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "June 15, 2023"
        },
        {
            id: 2,
            title: "Italian Cuisine Beyond Pizza and Pasta",
            category: "FOOD",
            excerpt: "Explore the regional specialties that make Italian food so much more than the classics.",
            image: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "May 28, 2023"
        },
        {
            id: 3,
            title: "Yoga Retreats for Mindful Travelers",
            category: "WELL BEING",
            excerpt: "Find your center at these serene yoga retreats around the world.",
            image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "April 10, 2023"
        },
        {
            id: 4,
            title: "Surfing in Portugal: A Complete Guide",
            category: "SPORT",
            excerpt: "Catch the best waves in Europe with our comprehensive surfing guide to Portugal.",
            image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "March 22, 2023"
        },
        {
            id: 5,
            title: "Luxury Glamping Experiences",
            category: "LIFESTYLE",
            excerpt: "Experience the great outdoors without sacrificing comfort at these luxury glamping sites.",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "February 18, 2023"
        },
        {
            id: 6,
            title: "Sustainable Travel: How to Make a Difference",
            category: "DESTINATIONS",
            excerpt: "Practical tips for reducing your environmental impact while exploring the world.",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "January 5, 2023"
        }
    ];

    // DOM Elements
    const featuredPostsContainer = document.getElementById('featuredPosts');
    const planTripBtn = document.getElementById('planTripBtn');
    const tripModal = document.getElementById('tripModal');
    const closeModal = document.getElementById('closeModal');
    const tripForm = document.getElementById('tripForm');

    // Render blog posts
    function renderPosts() {
        featuredPostsContainer.innerHTML = '';
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300';
            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <span class="text-blue-600 text-sm font-semibold">${post.category}</span>
                    <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">${post.title}</h3>
                    <p class="text-gray-600 mb-4">${post.excerpt}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-500 text-sm">${post.date}</span>
                        <button class="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
                    </div>
                </div>
            `;
            featuredPostsContainer.appendChild(postElement);
        });
    }

    // Modal functionality
    planTripBtn.addEventListener('click', () => {
        tripModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        tripModal.classList.add('hidden');
    });

    tripForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your trip preferences have been submitted. We will send you recommendations shortly.');
        tripModal.classList.add('hidden');
        tripForm.reset();
    });

    // Close modal when clicking outside
    tripModal.addEventListener('click', (e) => {
        if (e.target === tripModal) {
            tripModal.classList.add('hidden');
        }
    });

    // Initialize the page
    renderPosts();
});