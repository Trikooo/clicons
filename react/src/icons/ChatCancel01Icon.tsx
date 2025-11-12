import React from 'react';
import config from '../config';

interface ChatCancel01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ChatCancel01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/chat-cancel01)
 * @see {@link https://clicons.dev/icon/chat-cancel01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ChatCancel01Icon = React.forwardRef<SVGSVGElement, ChatCancel01IconProps>(
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

    const iconData = [
  [
    'path',
    {
      d: 'M13.9693 2.99975C13.4765 2.99267 12.5067 2.99805 12 2.99805C10.5209 2.99805 9.09517 3.02895 7.7562 3.08624C5.3157 3.19065 4.09545 3.24286 3.13007 4.2155C2.16469 5.18814 2.12282 6.37488 2.03909 8.74835C2.01346 9.47484 2 10.2273 2 10.998C2 11.7688 2.01346 12.5213 2.03909 13.2477C2.12282 15.6212 2.16469 16.808 3.13007 17.7806C4.09545 18.7532 5.31569 18.8054 7.75619 18.9099C7.83715 18.9133 7.91842 18.9167 8 18.92V21.2681C8 21.6713 8.32679 21.998 8.72991 21.998C8.90419 21.998 9.07273 21.9357 9.20503 21.8222L11.3845 19.9534C11.9325 19.4835 12.2064 19.2486 12.532 19.1246C12.8576 19.0006 13.2282 18.9936 13.9693 18.9795C14.7498 18.9647 15.5098 18.9413 16.2437 18.9099C18.6843 18.8054 19.9046 18.7532 20.8699 17.7806C21.8353 16.808 21.8772 15.6212 21.9609 13.2477C21.9865 12.5213 22 11.7688 22 10.998C22 10.6203 21.9968 10.3069 21.9904 10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M22 7L17 2M22 2L17 7',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.0045 11H12.0135M8.00903 11H8.018',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ]
];

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

ChatCancel01Icon.displayName = 'ChatCancel01Icon';
export default ChatCancel01Icon;
