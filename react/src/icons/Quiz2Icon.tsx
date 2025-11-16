import React from 'react';
import config from '../config';

interface Quiz2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Quiz2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/quiz2)
 * @see {@link https://clicons.dev/icon/quiz2}
 */
const Quiz2Icon = React.forwardRef<SVGSVGElement, Quiz2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 2C7.85786 2 4.5 5.35786 4.5 9.5C4.5 11.816 5.54973 13.8867 7.19934 15.2625C8.19018 16.0889 9 17.2098 9 18.5H15C15 17.2098 15.8098 16.0889 16.8007 15.2625C18.4503 13.8867 19.5 11.816 19.5 9.5C19.5 5.35786 16.1421 2 12 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 18.5H9V20.5C9 21.3284 9.67157 22 10.5 22H13.5C14.3284 22 15 21.3284 15 20.5V18.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 8C10 6.98748 10.8954 6 12 6C13.1046 6 14 6.82081 14 7.83333C14 8.19831 13.8837 8.53837 13.6831 8.82406C13.0854 9.67553 12 10.4875 12 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.992 14H12.001'
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

Quiz2Icon.displayName = 'Quiz2Icon';
export default Quiz2Icon;
