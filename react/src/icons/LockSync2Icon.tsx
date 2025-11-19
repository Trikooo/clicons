import React from 'react';
import config from '../config';

interface LockSync2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LockSync2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lock-sync2)
 * @see {@link https://clicons.dev/icon/lock-sync2}
 */
const LockSync2Icon = React.forwardRef<SVGSVGElement, LockSync2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 11H22C21.497 5.94668 17.2229 2 12.0247 2C6.48823 2 2 6.47715 2 12C2 17.5228 6.48823 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2154 16'
    }
  ],
  [
    'path',
    {
      d: 'M14.25 10.9824V9.1905C14.25 7.98072 13.2426 7 12 7C10.7574 7 9.75 7.98072 9.75 9.1905V10.9824M12 17C10.067 17 8.5 15.4744 8.5 13.5926C8.5 11.7107 10.067 10.1851 12 10.1851C13.933 10.1851 15.5 11.7107 15.5 13.5926C15.5 15.4744 13.933 17 12 17Z'
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

LockSync2Icon.displayName = 'LockSync2Icon';
export default LockSync2Icon;
