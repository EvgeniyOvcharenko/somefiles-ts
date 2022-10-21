enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard; // 1 (index)
const membershipReverse = Membership[2]; // Premium

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM; // INSTAGRAM - значение данного ключа
