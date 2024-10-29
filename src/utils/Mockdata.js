const reslist=[
    {
      "id": 1001,
      "name": "Margherita Pizza",
      "description": "A classic pizza topped with fresh mozzarella, tomatoes, and basil.",
      "price": 299.00,
      "currency": "INR",
      "category": "Pizza",
      "cuisine": "Italian",
      "veg": true,
      "rating": 3.5,
      "reviews": 150,
      "image_url": "https://images.unsplash.com/photo-1576173978881-7c5f2d9d8d93",
      "preparation_time": 30,
      "restaurant": {
        "name": "Pizza Hub",
        "location": "MG Road, Bengaluru",
        "contact": "+91 9876543210",
        "rating": 4.2
      },
      "ingredients": [
        "Mozzarella cheese",
        "Tomatoes",
        "Basil",
        "Olive oil",
        "Pizza dough"
      ],
      "allergens": [
        "Dairy",
        "Gluten"
      ],
      "available": true,
      "discount": {
        "percentage": 10,
        "valid_until": "2024-08-31"
      },
      "addons": [
        {
          "id": 1,
          "name": "Extra Cheese",
          "price": 50.00,
          "veg": true
        },
        {
          "id": 2,
          "name": "Jalapenos",
          "price": 30.00,
          "veg": true
        }
      ]
    },
    {
      "id": 1002,
      "name": "Butter Chicken",
      "description": "Tender chicken pieces cooked in a rich and creamy tomato-based gravy.",
      "price": 349.00,
      "currency": "INR",
      "category": "Main Course",
      "cuisine": "Indian",
      "veg": false,
      "rating": 4.7,
      "reviews": 200,
      "image_url": "https://images.unsplash.com/photo-1565372918675-d29cc237c80d",
      "preparation_time": 40,
      "restaurant": {
        "name": "Spice Villa",
        "location": "Koramangala, Bengaluru",
        "contact": "+91 9876543211",
        "rating": 4.5
      },
      "ingredients": [
        "Chicken",
        "Tomatoes",
        "Cream",
        "Butter",
        "Spices"
      ],
      "allergens": [
        "Dairy"
      ],
      "available": true,
      "discount": {
        "percentage": 15,
        "valid_until": "2024-08-31"
      },
      "addons": [
        {
          "id": 3,
          "name": "Butter Naan",
          "price": 40.00,
          "veg": true
        },
        {
          "id": 4,
          "name": "Extra Gravy",
          "price": 70.00,
          "veg": false
        }
      ]
    },
    {
      "id": 1003,
      "name": "Chocolate Brownie",
      "description": "Rich and fudgy chocolate brownie topped with a scoop of vanilla ice cream.",
      "price": 150.00,
      "currency": "INR",
      "category": "Dessert",
      "cuisine": "American",
      "veg": true,
      "rating": 3.8,
      "reviews": 180,
      "image_url": "https://images.unsplash.com/photo-1599785209707-cd5bb5a371a6",
      "preparation_time": 20,
      "restaurant": {
        "name": "Sweet Treats",
        "location": "Indiranagar, Bengaluru",
        "contact": "+91 9876543212",
        "rating": 4.6
      },
      "ingredients": [
        "Chocolate",
        "Butter",
        "Sugar",
        "Flour",
        "Eggs"
      ],
      "allergens": [
        "Dairy",
        "Gluten",
        "Eggs"
      ],
      "available": true,
      "discount": {
        "percentage": 5,
        "valid_until": "2024-08-31"
      },
      "addons": [
        {
          "id": 5,
          "name": "Extra Ice Cream Scoop",
          "price": 50.00,
          "veg": true
        }
      ]
    },
    {
      "id": 1004,
      "name": "Paneer Butter Masala",
      "description": "Soft paneer cubes cooked in a rich and creamy tomato gravy with a blend of Indian spices.",
      "price": 320.00,
      "currency": "INR",
      "category": "Main Course",
      "cuisine": "Indian",
      "veg": true,
      "rating": 2.6,
      "reviews": 210,
      "image_url": "https://images.unsplash.com/photo-1623716198274-30eb637b1e88",
      "preparation_time": 35,
      "restaurant": {
        "name": "Veggie Delight",
        "location": "Jayanagar, Bengaluru",
        "contact": "+91 9876543213",
        "rating": 4.3
      },
      "ingredients": [
        "Paneer",
        "Tomatoes",
        "Cream",
        "Butter",
        "Spices"
      ],
      "allergens": [
        "Dairy"
      ],
      "available": true,
      "discount": {
        "percentage": 10,
        "valid_until": "2024-08-31"
      },
      "addons": [
        {
          "id": 6,
          "name": "Butter Naan",
          "price": 40.00,
          "veg": true
        },
        {
          "id": 7,
          "name": "Extra Gravy",
          "price": 70.00,
          "veg": true
        }
      ]
    },
    {
      "id": 1005,
      "name": "Grilled Chicken Salad",
      "description": "Fresh greens topped with grilled chicken, avocado, cherry tomatoes, and a light vinaigrette.",
      "price": 250.00,
      "currency": "INR",
      "category": "Salad",
      "cuisine": "American",
      "veg": false,
      "rating": 4.4,
      "reviews": 120,
      "image_url": "https://images.unsplash.com/photo-1598867005910-54e9c9b4b1d6",
      "preparation_time": 25,
      "restaurant": {
        "name": "Healthy Bites",
        "location": "Whitefield, Bengaluru",
        "contact": "+91 9876543214",
        "rating": 4.5
      },
      "ingredients": [
        "Chicken",
        "Avocado",
        "Cherry Tomatoes",
        "Lettuce",
        "Vinaigrette"
      ],
      "allergens": [],
      "available": true,
      "discount": {
        "percentage": 5,
        "valid_until": "2024-08-31"
      },
      "addons": [
        {
          "id": 8,
          "name": "Extra Avocado",
          "price": 40.00,
          "veg": true
        }
      ]
    },
    {
        "id": 1006,
        "name": "Margherita Pizza",
        "description": "A classic pizza topped with fresh mozzarella, tomatoes, and basil.",
        "price": 299.00,
        "currency": "INR",
        "category": "Pizza",
        "cuisine": "Italian",
        "veg": true,
        "rating": 4.5,
        "reviews": 150,
        "image_url": "https://images.unsplash.com/photo-1576173978881-7c5f2d9d8d93",
        "preparation_time": 30,
        "restaurant": {
          "name": "Pizza Hub",
          "location": "MG Road, Bengaluru",
          "contact": "+91 9876543210",
          "rating": 4.2
        },
        "ingredients": [
          "Mozzarella cheese",
          "Tomatoes",
          "Basil",
          "Olive oil",
          "Pizza dough"
        ],
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "available": true,
        "discount": {
          "percentage": 10,
          "valid_until": "2024-08-31"
        },
        "addons": [
          {
            "id": 1,
            "name": "Extra Cheese",
            "price": 50.00,
            "veg": true
          },
          {
            "id": 2,
            "name": "Jalapenos",
            "price": 30.00,
            "veg": true
          }
        ]
    },
    {
        "id": 1007,
        "name": "Butter Chicken",
        "description": "Tender chicken pieces cooked in a rich and creamy tomato-based gravy.",
        "price": 349.00,
        "currency": "INR",
        "category": "Main Course",
        "cuisine": "Indian",
        "veg": false,
        "rating": 4.7,
        "reviews": 200,
        "image_url": "https://images.unsplash.com/photo-1565372918675-d29cc237c80d",
        "preparation_time": 40,
        "restaurant": {
          "name": "Spice Villa",
          "location": "Koramangala, Bengaluru",
          "contact": "+91 9876543211",
          "rating": 4.5
        },
        "ingredients": [
          "Chicken",
          "Tomatoes",
          "Cream",
          "Butter",
          "Spices"
        ],
        "allergens": [
          "Dairy"
        ],
        "available": true,
        "discount": {
          "percentage": 15,
          "valid_until": "2024-08-31"
        },
        "addons": [
          {
            "id": 3,
            "name": "Butter Naan",
            "price": 40.00,
            "veg": true
          },
          {
            "id": 4,
            "name": "Extra Gravy",
            "price": 70.00,
            "veg": false
          }
        ]
    },
    {
        "id": 1008,
        "name": "Chocolate Brownie",
        "description": "Rich and fudgy chocolate brownie topped with a scoop of vanilla ice cream.",
        "price": 150.00,
        "currency": "INR",
        "category": "Dessert",
        "cuisine": "American",
        "veg": true,
        "rating": 4.8,
        "reviews": 180,
        "image_url": "https://images.unsplash.com/photo-1599785209707-cd5bb5a371a6",
        "preparation_time": 20,
        "restaurant": {
          "name": "Sweet Treats",
          "location": "Indiranagar, Bengaluru",
          "contact": "+91 9876543212",
          "rating": 4.6
        },
        "ingredients": [
          "Chocolate",
          "Butter",
          "Sugar",
          "Flour",
          "Eggs"
        ],
        "allergens": [
          "Dairy",
          "Gluten",
          "Eggs"
        ],
        "available": true,
        "discount": {
          "percentage": 5,
          "valid_until": "2024-08-31"
        },
        "addons": [
          {
            "id": 5,
            "name": "Extra Ice Cream Scoop",
            "price": 50.00,
            "veg": true
          }
        ]
    },
    {
        "id": 1009,
        "name": "Paneer Butter Masala",
        "description": "Soft paneer cubes cooked in a rich and creamy tomato gravy with a blend of Indian spices.",
        "price": 320.00,
        "currency": "INR",
        "category": "Main Course",
        "cuisine": "Indian",
        "veg": true,
        "rating": 4.6,
        "reviews": 210,
        "image_url": "https://images.unsplash.com/photo-1623716198274-30eb637b1e88",
        "preparation_time": 35,
        "restaurant": {
          "name": "Veggie Delight",
          "location": "Jayanagar, Bengaluru",
          "contact": "+91 9876543213",
          "rating": 4.3
        },
        "ingredients": [
          "Paneer",
          "Tomatoes",
          "Cream",
          "Butter",
          "Spices"
        ],
        "allergens": [
          "Dairy"
        ],
        "available": true,
        "discount": {
          "percentage": 10,
          "valid_until": "2024-08-31"
        },
        "addons": [
          {
            "id": 6,
            "name": "Butter Naan",
            "price": 40.00,
            "veg": true
          },
          {
            "id": 7,
            "name": "Extra Gravy",
            "price": 70.00,
            "veg": true
          }
        ]
    },
    {
        "id": 1010,
        "name": "Grilled Chicken Salad",
        "description": "Fresh greens topped with grilled chicken, avocado, cherry tomatoes, and a light vinaigrette.",
        "price": 250.00,
        "currency": "INR",
        "category": "Salad",
        "cuisine": "American",
        "veg": false,
        "rating": 4.4,
        "reviews": 120,
        "image_url": "https://images.unsplash.com/photo-1598867005910-54e9c9b4b1d6",
        "preparation_time": 25,
        "restaurant": {
          "name": "Healthy Bites",
          "location": "Whitefield, Bengaluru",
          "contact": "+91 9876543214",
          "rating": 4.5
        },
        "ingredients": [
          "Chicken",
          "Avocado",
          "Cherry Tomatoes",
          "Lettuce",
          "Vinaigrette"
        ],
        "allergens": [],
        "available": true,
        "discount": {
          "percentage": 5,
          "valid_until": "2024-08-31"
        },
        "addons": [
          {
            "id": 8,
            "name": "Extra Avocado",
            "price": 40.00,
            "veg": true
          }
        ]
    },
    {
        "id": 1011,
        "name": "Tandoori Chicken",
        "description": "Chicken marinated in yogurt and spices, cooked in a traditional tandoor oven.",
        "price": 340.00,
        "currency": "INR",
        "category": "Appetizer",
        "cuisine": "Indian",
        "veg": false,
        "rating": 4.7,
        "reviews": 180,
        "image_url": "https://images.unsplash.com/photo-1612874742831-2f03140cb921",
        "preparation_time": 35,
        "restaurant": {
          "name": "Grill Master",
          "location": "BTM Layout, Bengaluru",
          "contact": "+91 9876543215",
          "rating": 4.6
        },
        "ingredients": [
          "Chicken",
          "Yogurt",
          "Spices"
        ],
        "allergens": [
          "Dairy"
        ],
        "available": true,
        "discount": {
          "percentage": 10,
          "valid_until": "2024-08-31"
        },
        "addons": [
          {
            "id": 9,
            "name": "Mint Chutney",
            "price": 20.00,
            "veg": true
          }
        ]
    },   
    {
        "id": 1012,
        "name": "Masala Dosa",
        "description": "Crispy rice and lentil crepe stuffed with spiced potato filling, served with chutney and sambar.",
        "price": 120.00,
        "currency": "INR",
        "category": "Breakfast",
        "cuisine": "Indian",
        "veg": true,
        "rating": 4.9,
        "reviews": 400,
        "image_url": "https://images.unsplash.com/photo-1608086021523-f62b6cd6e6e2",
        "preparation_time": 15,
        "restaurant": {
          "name": "South Indian Delights",
          "location": "JP Nagar, Bengaluru",
          "contact": "+91 9876543223",
          "rating": 4.8
        },
        "ingredients": [
          "Rice",
          "Lentils",
          "Potatoes",
          "Spices"
        ],
        "allergens": [
          "Gluten"
        ],
        "available": true,
        "discount": {
          "percentage": 5,
          "valid_until": "2024-08-31"
        },
        "addons": [
          {
            "id": 16,
            "name": "Extra Sambar",
            "price": 20.00,
            "veg": true
          }
        ]
    },
    {
        "id": 1013,
        "name": "Blueberry Cheesecake",
        "description": "Creamy cheesecake topped with a layer of fresh blueberries and served with a graham cracker crust.",
        "price": 180.00,
        "currency": "INR",
        "category": "Dessert",
        "cuisine": "American",
        "veg": true,
        "rating": 4.7,
        "reviews": 210,
        "image_url": "https://images.unsplash.com/photo-1542868758-99ad2d45b065",
        "preparation_time": 30,
        "restaurant": {
          "name": "Sweet Treats",
          "location": "Koramangala, Bengaluru",
          "contact": "+91 9876543224",
          "rating": 4.6
        },
        "ingredients": [
          "Cream cheese",
          "Blueberries",
          "Sugar",
          "Graham crackers",
          "Butter"
        ],
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "available": true,
        "discount": {
          "percentage": 8,
          "valid_until": "2024-08-31"
        },
        "addons": [
          {
            "id": 17,
            "name": "Extra Blueberry Topping",
            "price": 30.00,
            "veg": true
          }
        ]
    }
      
  
  ]

  export default reslist;