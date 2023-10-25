import { forwardRef, ReactNode, Ref, useMemo } from "react";

import clsx from "clsx";
import { IWebApp } from "edifice-ts-client";

import CardBody from "./CardBody";
import { CardContext } from "./CardContext";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import CardUser from "./CardUser";
import { useOdeIcons } from "../../core";

export interface CardProps {
  /**
   * IWeb App
   */
  app?: IWebApp | undefined;
  /**
   * Has option
   */
  isSelectable?: boolean;
  /**
   * Action on Card
   */
  isClickable?: boolean;
  /**
   * Selected state
   */
  isSelected?: boolean;
  /**
   * Click on card
   */
  onClick?: () => void;
  /**
   * Select a card with option menu
   */
  onSelect?: () => void;
  /* Children Node */
  children: ReactNode | ((...props: any) => ReactNode);
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

const Root = forwardRef(
  (
    {
      app,
      isSelectable = true,
      isClickable = true,
      isSelected = false,
      onClick,
      onSelect,
      children,
      className,
    }: CardProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { getIconCode } = useOdeIcons();
    const appCode = app ? getIconCode(app) : "placeholder";

    const values = useMemo(
      () => ({
        app,
        appCode,
        isSelectable,
        isClickable,
        onClick,
        onSelect,
      }),
      [app, appCode, isSelectable, isClickable, onClick, onSelect],
    );
    return (
      <CardContext.Provider value={values}>
        <div
          ref={ref}
          className={clsx(
            "card",
            {
              "is-selected": isSelected,
            },
            className,
          )}
        >
          <Card.Header />
          {typeof children === "function" ? children(appCode) : children}
        </div>
      </CardContext.Provider>
    );
  },
);

Root.displayName = "Card";

const Card = Object.assign(Root, {
  Title: CardTitle,
  Text: CardText,
  Image: CardImage,
  Body: CardBody,
  User: CardUser,
  Footer: CardFooter,
  Header: CardHeader,
});

export default Card;
