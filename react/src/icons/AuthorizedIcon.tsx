import React from 'react';
import config from '../config';

interface AuthorizedIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AuthorizedIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/authorized)
 * @see {@link https://clicons.dev/icon/authorized}
 */
const AuthorizedIcon = React.forwardRef<SVGSVGElement, AuthorizedIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 17C4 19.2091 5.75326 21 7.91602 21C9.68999 21 11.1885 19.7951 11.6699 18.1429H15.8599C16.2819 18.1429 16.3075 18.169 16.3075 18.6V19.8571C16.3075 20.3959 16.3075 20.6653 16.4713 20.8326C16.6352 21 16.8989 21 17.4263 21H18.1874C18.6265 21 18.846 21 19.0007 20.8705C19.1554 20.741 19.1984 20.5211 19.2845 20.0813L19.2845 20.0813L19.5921 18.5103C19.661 18.1585 19.6797 18.1429 20.031 18.1429H20.7829C21.3104 18.1429 21.5741 18.1429 21.7379 17.9755C22.1045 17.6011 22.0698 15.7921 21.7379 15.4531C21.5741 15.2857 21.3104 15.2857 20.7829 15.2857H11.4552C10.8267 13.9343 9.47817 13 7.91602 13C5.75326 13 4 14.7909 4 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.00896 17H8'
    }
  ],
  [
    'path',
    {
      d: 'M19 12.5V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V14'
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

AuthorizedIcon.displayName = 'AuthorizedIcon';
export default AuthorizedIcon;
