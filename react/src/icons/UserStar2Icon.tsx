import React from 'react';
import config from '../config';

interface UserStar2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UserStar2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/user-star2)
 * @see {@link https://clicons.dev/icon/user-star2}
 */
const UserStar2Icon = React.forwardRef<SVGSVGElement, UserStar2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5C11.7614 13.5 14 11.2614 14 8.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 20.5C16 16.634 12.866 13.5 9 13.5C5.13401 13.5 2 16.634 2 20.5'
    }
  ],
  [
    'path',
    {
      d: 'M19.5183 8.93325L20.0462 9.99786C20.1182 10.1461 20.3102 10.2882 20.4722 10.3154L21.4291 10.4757C22.041 10.5786 22.185 11.0262 21.744 11.4677L21.0001 12.2178C20.8741 12.3448 20.8051 12.5898 20.8441 12.7652L21.0571 13.6937C21.2251 14.4287 20.8381 14.713 20.1932 14.3289L19.2963 13.7936C19.1343 13.6968 18.8674 13.6968 18.7024 13.7936L17.8055 14.3289C17.1636 14.713 16.7736 14.4257 16.9416 13.6937L17.1546 12.7652C17.1935 12.5898 17.1246 12.3448 16.9986 12.2178L16.2547 11.4677C15.8167 11.0262 15.9577 10.5786 16.5696 10.4757L17.5265 10.3154C17.6855 10.2882 17.8775 10.1461 17.9495 9.99786L18.4774 8.93325C18.7654 8.35558 19.2333 8.35558 19.5183 8.93325Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

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
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

UserStar2Icon.displayName = 'UserStar2Icon';
export default UserStar2Icon;
