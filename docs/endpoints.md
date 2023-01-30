---
sidebar_label: "API"
sidebar_position: 1
---

# API END POINTS

API endpoints can greatly enhance the functionality and capabilities of your application, providing access to a wide range of resources and services.

| API END POINTS                                        | DESCRIPTION                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**/api/breeds** ](/docs/Reference/breeds.mdx)        | this endpoint is used to retrieve a list of all dog breeds that are available in the Dog Breed API. This endpoint will return an array of string, each representing a different breed of dog **(breed_name)**. the breed name is used for **/api/breeds/search?q=[breed_name]**. |
| [**/api/breeds/id=?q=[id]**](/docs/Reference/id.mdx)  | this endpoint is used to retrieve information about a specific dog breed. The **[id]** is passed as a parameter in the URL, and the API returns data such as the breed's history, physical characteristics, and personality traits.                                              |
| [**/api/breeds/search**](/docs/Reference//search.mdx) | this endpoint is used to retrieve information about a specific dog breed. The **[id]** is passed as a parameter in the URL, and the API returns data such as the breed's history, physical characteristics, and personality traits.                                              |
