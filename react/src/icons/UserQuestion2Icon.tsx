import React from 'react';
import config from '../config';

interface UserQuestion2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UserQuestion2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/user-question2)
 * @see {@link https://clicons.dev/icon/user-question2}
 */
const UserQuestion2Icon = React.forwardRef<SVGSVGElement, UserQuestion2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 8.5C14.5 5.73858 12.2614 3.5 9.5 3.5C6.73858 3.5 4.5 5.73858 4.5 8.5C4.5 11.2614 6.73858 13.5 9.5 13.5C12.2614 13.5 14.5 11.2614 14.5 8.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 20.5C16.5 16.634 13.366 13.5 9.5 13.5C5.63401 13.5 2.5 16.634 2.5 20.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 9.84615C17.5 8.82655 18.3954 8 19.5 8C20.6046 8 21.5 8.82655 21.5 9.84615C21.5 10.2137 21.3837 10.5561 21.1831 10.8438C20.5854 11.7012 19.5 12.0189 19.5 13.0385V13.5M19.4902 16H19.4992'
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

UserQuestion2Icon.displayName = 'UserQuestion2Icon';
export default UserQuestion2Icon;
