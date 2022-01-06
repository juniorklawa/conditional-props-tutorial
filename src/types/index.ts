// our mode types
export enum AVATAR_TYPE_ENUM {
  IMAGE = "IMAGE",
  INITIALS = "INITIALS",
  DEFAULT = "DEFAULT",
}

// inteface that our components will use to pass the props (it must contain all the props)
export interface AllAvatarProps {
  type: AVATAR_TYPE_ENUM;
  borderColor: string;
  url?: string;
  initials?: string;
}

// Avatar with image props (type should be defined here)
export type AvatarWithImageProps = {
  type: AVATAR_TYPE_ENUM.IMAGE;
  url: string;
} & AllAvatarProps;

// Avatar with initials props (type should also be defined here)
export type AvatarWithInitialsProps = {
  type: AVATAR_TYPE_ENUM.INITIALS;
  initials: string;
} & AllAvatarProps;

// selected mode props will be All avatar props with the intersection of the type we want to use, so required props will have priority on top of optional ones
export type SelectedModeProps = AllAvatarProps &
  (AvatarWithImageProps | AvatarWithInitialsProps);
