import React from 'react';
import config from '../config';

interface UserStarIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UserStarIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/user-star)
 * @see {@link https://clicons.dev/icon/user-star}
 */
const UserStarIcon = React.forwardRef<SVGSVGElement, UserStarIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 20C3 16.134 6.13401 13 10 13C11.275 13 12.4704 13.3409 13.5 13.9365'
    }
  ],
  [
    'path',
    {
      d: 'M18.1047 14.5055L18.7206 15.7475C18.8046 15.9204 19.0286 16.0862 19.2175 16.118L20.3339 16.305C21.0478 16.425 21.2158 16.9472 20.7014 17.4624L19.8335 18.3374C19.6865 18.4856 19.606 18.7715 19.6515 18.9761L19.9 20.0594C20.096 20.9168 19.6445 21.2485 18.8921 20.8004L17.8457 20.1758C17.6567 20.0629 17.3453 20.0629 17.1528 20.1758L16.1064 20.8004C15.3575 21.2485 14.9025 20.9133 15.0985 20.0594L15.347 18.9761C15.3925 18.7715 15.312 18.4856 15.165 18.3374L14.2971 17.4624C13.7861 16.9472 13.9506 16.425 14.6646 16.305L15.7809 16.118C15.9664 16.0862 16.1904 15.9204 16.2744 15.7475L16.8903 14.5055C17.2263 13.8315 17.7722 13.8315 18.1047 14.5055Z'
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

UserStarIcon.displayName = 'UserStarIcon';
export default UserStarIcon;
