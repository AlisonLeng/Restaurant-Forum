<template>
  <div class="container py-5">
    <NavTabs />

    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>

    <div class="row">
      <!-- RestaurantCard -->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
    </div>

    <!-- RestaurantsPagination -->
    <RestaurantsPagination
      :currentPage="currentPage"
      :totalPage="totalPage"
      :previousPage="previousPage"
      :nextPage="nextPage"
      :categoryId ="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Urban Weissnat",
            "tel": "(375) 496-3788",
            "address": "414 Lind Parkways",
            "opening_hours": "08:00",
            "description": "Nihil autem distinctio non similique.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.53573992708706",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Nora McDermott",
            "tel": "1-759-039-6509",
            "address": "4547 Lowell Mews",
            "opening_hours": "08:00",
            "description": "Quos et autem corporis odit. Quos eligendi dolorem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.17523053142484",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Jaida West IV",
            "tel": "1-796-183-5777 x43503",
            "address": "802 Casandra Branch",
            "opening_hours": "08:00",
            "description": "Temporibus aliquid autem eum. Quibusdam repellendu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.40626976048853",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Mr. Liam Mitchell",
            "tel": "(587) 885-2515 x3941",
            "address": "861 Reinger Crest",
            "opening_hours": "08:00",
            "description": "Est voluptatum similique quia.\nEum quibusdam nemo ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.866502136314168",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Judy Green",
            "tel": "225-541-1771 x81526",
            "address": "178 Iliana Way",
            "opening_hours": "08:00",
            "description": "Culpa sunt odio ratione animi explicabo. Possimus ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.87544087477859",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Lamar Hirthe",
            "tel": "(182) 641-9411 x10474",
            "address": "044 Mueller Village",
            "opening_hours": "08:00",
            "description": "Quia ea excepturi sit quia aperiam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.14222613837066",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Evie Steuber",
            "tel": "1-418-520-9363 x56148",
            "address": "9594 Osinski Ridges",
            "opening_hours": "08:00",
            "description": "Ducimus delectus eos.\nVoluptatem et voluptatibus v",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.618646407371564",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Roy Kassulke I",
            "tel": "(407) 368-3578",
            "address": "39520 Kolby Island",
            "opening_hours": "08:00",
            "description": "Consequatur in deleniti qui ut omnis nam sed non. ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.50777943079356",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Nova Schuppe",
            "tel": "1-842-810-0603",
            "address": "734 Conn Creek",
            "opening_hours": "08:00",
            "description": "recusandae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.20753442096364",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Octavia Yundt",
            "tel": "1-545-177-2477 x43402",
            "address": "10476 Alyce Shoal",
            "opening_hours": "08:00",
            "description": "Labore quasi ipsum. Harum esse veritatis. Et tempo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.79198168933443",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs: NavTabs,
    RestaurantCard: RestaurantCard,
    RestaurantsNavPills: RestaurantsNavPills,
    RestaurantsPagination: RestaurantsPagination
  },

  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },

   created() {
    this.fetchRestaurants()
  },

  methods: {
    fetchRestaurants() {
      const { restaurants, categories, categoryId, page, totalPage, prev, next} = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }

 
}
</script>