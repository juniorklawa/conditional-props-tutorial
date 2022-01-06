// our mode types
export enum AVATAR_TYPE_ENUM {
  IMAGE = "IMAGE",
  INITIALS = "INITIALS",
  DEFAULT = "DEFAULT",
}

// inteface that our components will use to pass the props
export interface AllAvatarProps {
  type: AVATAR_TYPE_ENUM;
  borderColor: string;
  url?: string;
  initials?: string;
}

// props that all components types will have
interface RequiredTextProps {
  type: AVATAR_TYPE_ENUM;
  borderColor: string;
}

// title and color props (type should be defined here)
export type AvatarWithImageProps = {
  type: AVATAR_TYPE_ENUM.IMAGE;
  url: string;
} & RequiredTextProps;

// title and size props (type should also be defined here)
export type AvatarWithInitialsProps = {
  type: AVATAR_TYPE_ENUM.INITIALS;
  initials: string;
} & RequiredTextProps;

export type SelectedModeProps = RequiredTextProps &
  (AvatarWithImageProps | AvatarWithInitialsProps);
