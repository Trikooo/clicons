import React from 'react';
import config from '../config';

interface UserTime2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UserTime2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/user-time2)
 * @see {@link https://clicons.dev/icon/user-time2}
 */
const UserTime2Icon = React.forwardRef<SVGSVGElement, UserTime2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '9.5',
      cy: '6',
      r: '3.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 18.5L17 17.9V15.5M13 17.5C13 19.7091 14.7909 21.5 17 21.5C19.2091 21.5 21 19.7091 21 17.5C21 15.2909 19.2091 13.5 17 13.5C14.7909 13.5 13 15.2909 13 17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 18.5V16.4704C3 15.2281 3.55927 14.0099 4.68968 13.4946C6.0685 12.8661 7.72212 12.5 9.5 12.5C10.5541 12.5 11.5646 12.6287 12.5 12.8645'
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

UserTime2Icon.displayName = 'UserTime2Icon';
export default UserTime2Icon;
