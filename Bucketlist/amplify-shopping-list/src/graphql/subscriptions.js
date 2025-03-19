/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShoppingListItem = /* GraphQL */ `
  subscription OnCreateShoppingListItem(
    $filter: ModelSubscriptionShoppingListItemFilterInput
    $owner: String
  ) {
    onCreateShoppingListItem(filter: $filter, owner: $owner) {
      id
      itemName
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateShoppingListItem = /* GraphQL */ `
  subscription OnUpdateShoppingListItem(
    $filter: ModelSubscriptionShoppingListItemFilterInput
    $owner: String
  ) {
    onUpdateShoppingListItem(filter: $filter, owner: $owner) {
      id
      itemName
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteShoppingListItem = /* GraphQL */ `
  subscription OnDeleteShoppingListItem(
    $filter: ModelSubscriptionShoppingListItemFilterInput
    $owner: String
  ) {
    onDeleteShoppingListItem(filter: $filter, owner: $owner) {
      id
      itemName
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
