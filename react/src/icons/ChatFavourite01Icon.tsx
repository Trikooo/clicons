import React from 'react';
import config from '../config';

interface ChatFavourite01IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChatFavourite01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/chat-favourite01)
 * @see {@link https://clicons.dev/icon/chat-favourite01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ChatFavourite01Icon = React.forwardRef<SVGSVGElement, ChatFavourite01IconProps>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? 16;
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.8;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [["path", { d: "M12.0045 11H12.0135M8.00903 11H8.018", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "0" }],
  ["path", { d: "M21.9924 9.99917C21.9974 10.3286 22 10.6621 22 10.9992C22 11.77 21.9865 12.5224 21.9609 13.2489C21.8772 15.6223 21.8353 16.8091 20.8699 17.7817C19.9046 18.7544 18.6843 18.8066 16.2437 18.911C15.5098 18.9424 14.7498 18.9659 13.9693 18.9807C13.2282 18.9947 12.8576 19.0017 12.532 19.1257C12.2064 19.2497 11.9325 19.4846 11.3845 19.9545L9.20503 21.8234C9.07273 21.9368 8.90419 21.9992 8.72991 21.9992C8.32679 21.9992 8 21.6724 8 21.2693V18.9211C7.91842 18.9178 7.83715 18.9144 7.75619 18.911C5.31569 18.8066 4.09545 18.7544 3.13007 17.7817C2.16469 16.8091 2.12282 15.6223 2.03909 13.2489C2.01346 12.5224 2 11.77 2 10.9992C2 10.2284 2.01346 9.47596 2.03909 8.74947C2.12282 6.376 2.16469 5.18926 3.13007 4.21662C4.09545 3.24398 5.3157 3.19177 7.7562 3.08736C8.7908 3.04309 9.8772 3.01458 11 3.00391", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18 9C18 9 14 6.52941 14 4.13889C14 2.95761 14.8421 2 16 2C16.6 2 17.2 2.20588 18 3.02941C18.8 2.20588 19.4 2 20 2C21.1579 2 22 2.95761 22 4.13889C22 6.52941 18 9 18 9Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

ChatFavourite01Icon.displayName = 'ChatFavourite01Icon';
export default ChatFavourite01Icon;
