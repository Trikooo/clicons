import React from 'react';
import config from '../config';

interface UserWarning3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UserWarning3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/user-warning3)
 * @see {@link https://clicons.dev/icon/user-warning3}
 */
const UserWarning3Icon = React.forwardRef<SVGSVGElement, UserWarning3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.5 7C15.5 9.20914 13.7091 11 11.5 11C9.29086 11 7.5 9.20914 7.5 7C7.5 4.79086 9.29086 3 11.5 3C13.7091 3 15.5 4.79086 15.5 7Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 14H9.5C6.73858 14 4.5 16.2386 4.5 19C4.5 20.1046 5.39543 21 6.5 21H16.5C17.6046 21 18.5 20.1046 18.5 19C18.5 16.2386 16.2614 14 13.5 14Z'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 6V10'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 13V13.01'
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

UserWarning3Icon.displayName = 'UserWarning3Icon';
export default UserWarning3Icon;
