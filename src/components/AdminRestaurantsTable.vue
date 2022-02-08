<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{name: 'admin-restaurant-edit', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
            }
        },
        {
            "id": 2,
            "name": "Nora McDermott",
            "tel": "1-759-039-6509",
            "address": "4547 Lowell Mews",
            "opening_hours": "08:00",
            "description": "Quos et autem corporis odit. Quos eligendi dolorem placeat. Nemo aliquam quo fugit aut quia et est autem. Sunt sit quos voluptas expedita.",
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
            }
        },
        {
            "id": 3,
            "name": "Jaida West IV",
            "tel": "1-796-183-5777 x43503",
            "address": "802 Casandra Branch",
            "opening_hours": "08:00",
            "description": "Temporibus aliquid autem eum. Quibusdam repellendus rerum voluptatem sit illo quas. Qui totam iure provident non officia iste aspernatur. Nihil vero nihil et et natus quisquam. Ut repudiandae sed nihil ab quasi laudantium est. Perspiciatis harum omnis est ipsum eaque vitae.",
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
            }
        },
        {
            "id": 4,
            "name": "Mr. Liam Mitchell",
            "tel": "(587) 885-2515 x3941",
            "address": "861 Reinger Crest",
            "opening_hours": "08:00",
            "description": "Est voluptatum similique quia.\nEum quibusdam nemo nihil sint id.\nVoluptatem debitis dicta molestias et dolor quod animi praesentium.\nQuis vel rerum iure et repudiandae laudantium.\nMaiores accusantium incidunt expedita quis.",
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
            }
        },
        {
            "id": 5,
            "name": "Judy Green",
            "tel": "225-541-1771 x81526",
            "address": "178 Iliana Way",
            "opening_hours": "08:00",
            "description": "Culpa sunt odio ratione animi explicabo. Possimus est impedit itaque eius accusantium non aperiam. Quo ut quae quibusdam. Aliquam omnis repudiandae maxime. Neque eaque nam amet ipsam molestiae ut nulla. Odio id aut est.",
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
            }
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
            }
        },
        {
            "id": 7,
            "name": "Evie Steuber",
            "tel": "1-418-520-9363 x56148",
            "address": "9594 Osinski Ridges",
            "opening_hours": "08:00",
            "description": "Ducimus delectus eos.\nVoluptatem et voluptatibus voluptas odio.\nEnim iusto harum distinctio rerum rerum.\nFugiat nisi qui voluptate.",
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
            }
        },
        {
            "id": 8,
            "name": "Roy Kassulke I",
            "tel": "(407) 368-3578",
            "address": "39520 Kolby Island",
            "opening_hours": "08:00",
            "description": "Consequatur in deleniti qui ut omnis nam sed non. Sint vitae aut. Est recusandae voluptatem officia laboriosam molestias. Accusantium cum id eveniet autem. Ut qui error fuga maiores magni nulla. Earum mollitia fugiat iste ut quia nemo voluptates quia cum.\n \rNon sit quos. Aliquid aspernatur voluptate iste possimus et debitis qui ut. Possimus iusto voluptatum accusantium. Officia voluptas ut aspernatur rerum accusantium incidunt. Quis maiores aperiam eum sit quos est. Est velit voluptas magnam maxime est sint alias.\n \rIusto perspiciatis laboriosam quia voluptate autem qui itaque dolorem cum. At ab quaerat sit occaecati debitis aut nesciunt. Eveniet expedita ut quod modi tempore iusto similique tenetur. Qui consequatur est similique sint. Unde architecto sunt sint. Consequuntur atque velit et qui nostrum aspernatur.",
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
            }
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
            }
        },
        {
            "id": 10,
            "name": "Octavia Yundt",
            "tel": "1-545-177-2477 x43402",
            "address": "10476 Alyce Shoal",
            "opening_hours": "08:00",
            "description": "Labore quasi ipsum. Harum esse veritatis. Et tempora modi.\n \rVoluptates aut numquam quis voluptas. Placeat voluptatem praesentium sit qui dicta dignissimos. Atque labore sunt voluptates. Esse consectetur fuga officiis delectus ratione labore sed.\n \rVoluptas tempora quos voluptatem fuga et ducimus. Velit eos enim facilis necessitatibus rerum ipsum. Delectus voluptas nostrum autem autem enim aut est. Et blanditiis tempora deserunt.",
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
            }
        },
        {
            "id": 11,
            "name": "Sid Harber",
            "tel": "556-210-5880 x12972",
            "address": "62223 Rath Ford",
            "opening_hours": "08:00",
            "description": "incidunt est doloremque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.59786597349803",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 12,
            "name": "Remington Oberbrunner",
            "tel": "1-109-696-0960",
            "address": "31609 Schoen Glen",
            "opening_hours": "08:00",
            "description": "Enim autem eaque laborum sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.63340417084516",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 13,
            "name": "Mireya Schuster",
            "tel": "(525) 564-1919 x6805",
            "address": "4931 Reynolds Square",
            "opening_hours": "08:00",
            "description": "Ut vitae porro sed unde. Sit et aperiam. Et ut dolore natus in explicabo. Eius quia quo a accusantium harum nihil quia. Aut tempora explicabo blanditiis sunt illo nihil libero. Ea dolore illum.\n \rDolorem exercitationem provident hic aliquid qui consequatur nihil. Voluptas et est et. Laborum error consequatur labore nisi aut expedita. Blanditiis quis laborum error sed. Ducimus atque optio possimus autem doloribus ullam.\n \rSint earum quas nobis perspiciatis omnis quos est voluptatem labore. Enim facilis sed non. Ea reprehenderit molestiae. Sequi commodi quia officia doloribus magni ut. Qui eveniet sit nulla qui qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.432799270200087",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 14,
            "name": "Andrew Mante",
            "tel": "1-701-011-2244 x153",
            "address": "6759 Candido Freeway",
            "opening_hours": "08:00",
            "description": "omnis magni optio",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.901143960225895",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 15,
            "name": "Neha Baumbach",
            "tel": "970.402.1552 x9487",
            "address": "0834 Koepp Shores",
            "opening_hours": "08:00",
            "description": "Tenetur et est explicabo et perspiciatis.\nConsequuntur omnis eum est.\nSimilique eos fuga.\nImpedit incidunt odit dolorem commodi sed quod.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.63163274690088",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 16,
            "name": "Chet Howell",
            "tel": "208-461-7292 x3140",
            "address": "898 Julien Meadow",
            "opening_hours": "08:00",
            "description": "a omnis magnam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.197157019304528",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 17,
            "name": "Ms. Shea Hoppe",
            "tel": "1-920-120-1888 x56754",
            "address": "37870 Albert Field",
            "opening_hours": "08:00",
            "description": "Ut voluptatem necessitatibus occaecati officia ea voluptatibus neque. Ut consequatur ab eum qui. Assumenda natus aliquid qui omnis perferendis qui. Sint unde earum velit voluptas voluptatem perspiciatis veritatis. Perspiciatis voluptas reiciendis ad doloremque eius ducimus nesciunt ad. Ab sit quasi rerum alias assumenda molestias consequuntur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.82726610274588",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 18,
            "name": "Kristian Emard",
            "tel": "(568) 236-0490 x2764",
            "address": "72359 Marielle Ports",
            "opening_hours": "08:00",
            "description": "dolor excepturi et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.289404020292544",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 19,
            "name": "Laney Nader",
            "tel": "336-330-0989",
            "address": "85102 Wehner Inlet",
            "opening_hours": "08:00",
            "description": "Magnam autem voluptas ad reiciendis aut aut facilis inventore non. Possimus vitae optio voluptatem ratione et voluptates incidunt. Mollitia eos dolorem ad assumenda quia voluptas dolor illo. Omnis et inventore. Non odio aut ex voluptatibus nam ad voluptatem a labore. Consequatur ipsum voluptates enim laudantium necessitatibus dolorem laborum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.86139559117975",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 20,
            "name": "Ezra Pfannerstill",
            "tel": "(210) 968-6576 x25812",
            "address": "432 Kassulke Ranch",
            "opening_hours": "08:00",
            "description": "Quia tempore magni sed ut fugiat veniam. Magnam unde doloribus autem quisquam numquam. Quisquam veritatis voluptatum impedit. Voluptatibus sed debitis explicabo placeat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.05358335116954",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 21,
            "name": "Electa Orn",
            "tel": "(124) 338-8283 x855",
            "address": "0378 Brown Estates",
            "opening_hours": "08:00",
            "description": "consequatur velit quia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.675301158436117",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 22,
            "name": "Ana Barrows",
            "tel": "(329) 047-2919 x89030",
            "address": "54579 Jast Coves",
            "opening_hours": "08:00",
            "description": "Possimus iure ad architecto nihil.\nEsse ipsa omnis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.47427592518606",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 23,
            "name": "Antoinette Miller",
            "tel": "891.058.6127 x736",
            "address": "91227 Hoppe Crossing",
            "opening_hours": "08:00",
            "description": "Dicta voluptate esse sapiente.\nEt exercitationem saepe et odio enim est eius fuga culpa.\nLaboriosam omnis sint officia deleniti dolorum doloremque ex est et.\nEst eveniet nulla quae provident facere dolorum.\nTempora sint laboriosam ut impedit quisquam enim autem quia dolor.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.383137704866051",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 24,
            "name": "Alva Shields IV",
            "tel": "112.960.2751 x230",
            "address": "841 Wolff Expressway",
            "opening_hours": "08:00",
            "description": "Totam nemo adipisci expedita similique non qui nobis pariatur. Quam aperiam nisi doloribus fugit. Vitae accusamus exercitationem optio quia perferendis autem ipsa. Magni accusantium quasi eum et esse sapiente. Iure nostrum inventore vel autem.\n \rDoloribus sequi voluptatem cumque qui aspernatur voluptates ut voluptatem. Eaque qui est quis excepturi quis. Dolores ea sit occaecati. Reiciendis quibusdam quod qui ut.\n \rSed labore voluptas iure quis illo aut ut sit ex. Doloribus aut sint a dolores ipsum. Odit et sint tempore ab. Porro in suscipit et explicabo ratione ut. Rem beatae numquam molestiae iste. Id nulla aut aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.299424425676868",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 25,
            "name": "Bert Gutkowski",
            "tel": "850.518.2180",
            "address": "159 Johann Landing",
            "opening_hours": "08:00",
            "description": "velit voluptatem est",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.61787418540267",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 26,
            "name": "Marshall Paucek",
            "tel": "389-831-3456",
            "address": "99627 Schiller Mountain",
            "opening_hours": "08:00",
            "description": "Quo quis voluptatem quia accusamus consequatur sunt. Mollitia quia aliquid aut ab consequatur eos porro asperiores. Dolor qui sit ullam sequi esse commodi eum nihil dolorum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.98741993566533",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 27,
            "name": "Harmony Erdman",
            "tel": "1-501-631-7806",
            "address": "014 Jaiden Divide",
            "opening_hours": "08:00",
            "description": "beatae quia eveniet",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.65791842473692",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 28,
            "name": "Brice Kohler",
            "tel": "(830) 581-2726",
            "address": "08280 Lydia Islands",
            "opening_hours": "08:00",
            "description": "Recusandae sunt dignissimos sapiente facilis.\nUt voluptatem illum officia.\nLibero id quis vel animi placeat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.84276606529298",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 29,
            "name": "Kathryn Orn",
            "tel": "705-502-2628 x621",
            "address": "886 Braden Pass",
            "opening_hours": "08:00",
            "description": "Ab nam iure aut sunt earum mollitia officiis.\nQuia a quia alias possimus iusto qui.\nEt a nemo omnis doloremque quis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.24297203780034",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 30,
            "name": "Eleanora Feest I",
            "tel": "(138) 434-6117 x22515",
            "address": "321 Edna Bypass",
            "opening_hours": "08:00",
            "description": "Doloribus aliquid sint et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.11368868059179",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 31,
            "name": "Fermin Grant",
            "tel": "(615) 445-0205",
            "address": "095 Wiley Meadows",
            "opening_hours": "08:00",
            "description": "Dolorem consequatur autem enim sit nostrum rem hic provident. Eos laboriosam repudiandae dolor molestias provident rem. Cumque omnis perspiciatis rerum. Ut ut error magnam illum illum ut nemo. Aperiam voluptas doloribus est voluptatibus rerum commodi maiores est.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.697120027740636",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 32,
            "name": "Jada Denesik MD",
            "tel": "426.870.1369 x68577",
            "address": "814 Legros Pass",
            "opening_hours": "08:00",
            "description": "Numquam eius non. Voluptatem ut eum perspiciatis eum. Id quaerat ea ut nulla enim necessitatibus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.9159870577394",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 33,
            "name": "Mrs. Caleb Rodriguez",
            "tel": "1-427-657-2046 x051",
            "address": "1280 Herzog Path",
            "opening_hours": "08:00",
            "description": "Sunt rerum quaerat voluptate deserunt animi eum consequatur minima. Ut autem et repellat tempora consectetur. Impedit voluptatem voluptatibus maiores accusantium commodi et itaque. Pariatur eligendi aliquid at. Ut sint id consequuntur quaerat dolor est cum sit autem. Corrupti doloremque et aut culpa nisi quas.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.18575055742271",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 34,
            "name": "Orville Crona",
            "tel": "1-263-411-4482 x48499",
            "address": "287 Goodwin Ford",
            "opening_hours": "08:00",
            "description": "Non reiciendis aperiam. Officiis nostrum non nobis culpa aut. Vero perferendis dolores perspiciatis porro et totam earum. Cumque suscipit corrupti magnam corrupti aperiam vero ab. Nesciunt beatae quos.\n \rVoluptatum qui quis eos aut ut est accusantium sit vitae. Facilis odio minus voluptatem at. Deserunt rerum est mollitia pariatur ullam optio.\n \rBeatae est id unde consequatur. Eos quibusdam esse maiores et magni non perferendis placeat. Autem et sed sint nesciunt in. Amet omnis quis at ut placeat non consequatur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.4551623350157037",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 35,
            "name": "Mr. Nolan Haley",
            "tel": "(493) 421-7557 x05285",
            "address": "48513 Rodriguez Burg",
            "opening_hours": "08:00",
            "description": "Totam culpa laboriosam ratione rem nobis culpa dolorem molestiae placeat.\nSit magni iure quo doloribus.\nLaborum qui nesciunt itaque cupiditate.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.97900745617132",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 36,
            "name": "Eula Schulist",
            "tel": "805-155-1715 x35508",
            "address": "497 Toni Ville",
            "opening_hours": "08:00",
            "description": "inventore",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.442510577685354",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 37,
            "name": "Aliya Sipes",
            "tel": "260.796.4776",
            "address": "956 Jovani Tunnel",
            "opening_hours": "08:00",
            "description": "Non maiores consequatur recusandae accusantium. Consequatur repellendus pariatur dolorem necessitatibus laudantium et earum. Nam impedit doloremque assumenda quia nostrum natus.\n \rDeleniti labore eum aut magnam officia. Qui ex animi omnis cumque sapiente et perferendis qui. Explicabo qui ea qui neque dicta.\n \rProvident doloribus quibusdam eum est et ea ex quibusdam facere. Quas eum in dicta ut eos. Ea veniam rerum amet facere nulla excepturi. Vel impedit aut quod. Fugiat temporibus culpa quia autem ad doloremque. Illum dolor adipisci pariatur tempora expedita.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.769107059542254",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 38,
            "name": "Finn Cormier",
            "tel": "(702) 837-6492 x007",
            "address": "4494 Iliana Junctions",
            "opening_hours": "08:00",
            "description": "Perferendis nihil quia excepturi consequatur beatae non suscipit. Iure aut ab et molestiae provident velit animi harum. Sapiente quam animi a ut omnis quisquam amet nisi. Nulla optio cum eos totam eum. Saepe inventore praesentium ex placeat hic quis. Atque perferendis expedita cumque.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.853115783090026",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 39,
            "name": "Arlo Casper",
            "tel": "151-539-3035",
            "address": "4656 Lizeth Harbors",
            "opening_hours": "08:00",
            "description": "Cum blanditiis rerum culpa modi corporis dolorum. Est est recusandae exercitationem eos a tempora vitae et quidem. Illo non sint occaecati repudiandae velit autem enim illum neque.\n \rIn voluptatem est. Officia assumenda et iusto. Repudiandae reprehenderit sit enim explicabo. Quisquam debitis dolores maiores similique.\n \rUt est autem nisi a et. Ea in dolorem saepe in officia provident temporibus. Sint officiis at ut. Adipisci omnis voluptatibus. Ut similique autem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.18295859402603",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 40,
            "name": "Brennon Christiansen",
            "tel": "(522) 732-9876 x05533",
            "address": "0545 Wiza Pine",
            "opening_hours": "08:00",
            "description": "Ut placeat placeat dolores laudantium ex enim vero quis minus. Dolorem velit nihil rem quae. Eius maiores quas quibusdam. Neque illo dolor adipisci amet numquam velit. Et dolor est numquam maiores dolorum nostrum eius. Dolorem et commodi eum aliquam dolores qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.23318057547245",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 41,
            "name": "Lempi Lynch IV",
            "tel": "1-945-952-2266 x179",
            "address": "0962 Joaquin Falls",
            "opening_hours": "08:00",
            "description": "Dolorum rerum deleniti quaerat est modi nisi est quos sunt. Dolores accusamus consequatur quibusdam omnis. In nesciunt quo. Nesciunt sapiente fugiat non repellat eligendi velit cum. Esse ipsum reprehenderit quam animi autem. Dolore aliquam et dolor et et molestiae.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.19448696313947",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 42,
            "name": "Marc Mohr",
            "tel": "651.436.4710 x3550",
            "address": "635 Hammes Vista",
            "opening_hours": "08:00",
            "description": "Consequatur nihil alias fugiat necessitatibus et.\nSint dignissimos tempora aperiam asperiores voluptatem aut voluptatem adipisci sequi.\nId ut a hic.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.21695066399957",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 43,
            "name": "Louie Ondricka",
            "tel": "(878) 058-0888 x786",
            "address": "30318 Julia Roads",
            "opening_hours": "08:00",
            "description": "Eaque sed reprehenderit velit ad quo ut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.29356553077444",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 44,
            "name": "Maynard Dach",
            "tel": "755.567.7372",
            "address": "624 O'Keefe Street",
            "opening_hours": "08:00",
            "description": "Et iste exercitationem dolores eos et est quia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.07559093221018",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 45,
            "name": "Leda Streich MD",
            "tel": "900.722.2177",
            "address": "9763 Evans Pike",
            "opening_hours": "08:00",
            "description": "Est quis tempore enim sint beatae voluptates voluptatem.\nQui et et doloremque a consectetur.\nSed voluptate saepe porro.\nQuibusdam sint cum minima.\nSit sint perferendis quos sed sint enim.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.89240240399019",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 46,
            "name": "Orville Kohler",
            "tel": "(570) 957-3897 x6977",
            "address": "24756 Delphine Rue",
            "opening_hours": "08:00",
            "description": "Fugit et alias repellat corporis necessitatibus et sapiente omnis. Alias fugiat autem impedit. Et eius est distinctio odio. Officiis sapiente quasi maiores esse.\n \rVoluptas sunt cumque nobis sapiente corrupti sit necessitatibus perferendis reiciendis. Qui voluptatibus repellat vel ut illo unde laborum. Et eaque quis.\n \rNihil sapiente odio est facere expedita quo. Est id quo voluptatem aut in voluptas aut. Aut odit aut architecto.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.47459988978319",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 47,
            "name": "Vella Wolf",
            "tel": "416.743.3439 x0954",
            "address": "38612 Hammes Loaf",
            "opening_hours": "08:00",
            "description": "in",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.01736640119209",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 48,
            "name": "Maymie Veum",
            "tel": "(204) 969-8227 x56475",
            "address": "84553 Goyette Via",
            "opening_hours": "08:00",
            "description": "Laborum exercitationem est quas in repellendus in. Voluptate ullam expedita non commodi. Asperiores quidem atque consequatur.\n \rQuasi et voluptas temporibus omnis quia enim ea et non. Earum nesciunt voluptas laudantium. Eveniet nulla rerum voluptatem ab soluta et omnis.\n \rEt quo et iusto nesciunt facilis. Id autem animi vel minus. Esse quidem et aliquid quo et quod. Culpa ipsam itaque ut ipsam. Quasi quia voluptas tenetur. Odio error officia quia ratione cum occaecati rem impedit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.048335157500325",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 49,
            "name": "Verna Littel",
            "tel": "(485) 346-9165 x3990",
            "address": "97199 Schmidt Estates",
            "opening_hours": "08:00",
            "description": "minus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.66069846722317",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        },
        {
            "id": 50,
            "name": "Dr. Genoveva Halvorson",
            "tel": "409.744.1448",
            "address": "574 Jerry Viaduct",
            "opening_hours": "08:00",
            "description": "Dolor reprehenderit qui eos voluptatum. Ab mollitia sit repellendus. Ut alias autem et maiores vel placeat inventore. Quibusdam at nemo est voluptatem iure aspernatur quos. Consectetur ea nesciunt qui error eligendi qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.332309461356886",
            "viewCounts": 0,
            "createdAt": "2022-01-26T14:41:12.000Z",
            "updatedAt": "2022-01-26T14:41:12.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-26T14:41:12.000Z",
                "updatedAt": "2022-01-26T14:41:12.000Z"
            }
        }
    ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
    this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId) 
    }
  }
}
</script>