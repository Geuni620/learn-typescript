interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function FetchProduct(): Promise<Product[]> {}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }
// function DeplayProductDetail(shoppingItem: ProductDetail) {}

// 특정상품의 상세페이지
// type shoppingDetail = Pick<Product, "id" | "name" | "price">;
// function DeplayProductDetail(
//   shoppingItem: Pick<Product, "id" | "name" | "price">
// ) {}

// type shoppingDetailDelete
// function DeplayProductDetail(
//   shoppingItem: Omit<Product, "id" | "name" | "price">
// ) {}

// interface UpdateProduct {
//   id: number;
//   name: string;
//   price: number;
//   brand: string;
//   stock: number;
// }

// partial 처리하면 다 넣어도 되고, 중간에 몇개 빼도 되고, 선택적으로 넣을 수 있음.
type UpdateProduct = Partial<Product>;

// 3. 특정 상품정보를 업데이트 하는 함수
function upDateProductItem(productItem: Partial<Product>) {}

// 4. 유틸리티타입 구현하기 Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotourl: string;
}

// 업데이트하기, 셋다 들어가도 되고, 하나만 들어가도 됨
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotourl?: string;
// }

// 1. 위에 있는 UserProfile을 재활용해서 사용해보자
type UserProfileUpdate = {
  username?: UserProfile["username"];
  email?: UserProfile["email"];
  profilePhotourl?: UserProfile["profilePhotourl"];
};

// 2. 축약과정
type UserProfileUpdate = {
  // 반복문을 탄다고 보면 됨, username부터 profilePhotourl까지 반복문, 반복문 돌면서 옵셔널 추가해줌
  // 이게 Mapped Type이라고 함(공식문서) )
  [p in "username" | "email" | "profilePhotourl"]?: UserProfile[p];
};

// 3.
type UserProfileKeys = keyof UserProfile;

// 4.
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};


// 5. 이게 바로 Partial의 구현모습
type Subset<T> ={
  [p in keyof <T>]?: T[p];
}