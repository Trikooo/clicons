import React from 'react';
import config from '../config';

interface ThreadIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ThreadIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/thread)
 * @see {@link https://clicons.dev/icon/thread}
 */
const ThreadIcon = React.forwardRef<SVGSVGElement, ThreadIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.5 7.5H16.5C18.3856 7.5 19.3284 7.5 19.9142 8.08579C20.5 8.67157 20.5 9.61438 20.5 11.5V12.5M16.5 10.5H4.5M16.5 13.5H4.5M16.5 16.5H4.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.4999 19.5002H5.49988C4.39531 19.5002 3.49988 20.3956 3.49988 21.5002H17.4999C17.4999 20.3956 16.6044 19.5002 15.4999 19.5002Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.49988 4.49969L15.4999 4.49969C16.6044 4.49969 17.4999 3.60426 17.4999 2.49969L3.49988 2.49969C3.49988 3.60426 4.39531 4.49969 5.49988 4.49969Z'
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

ThreadIcon.displayName = 'ThreadIcon';
export default ThreadIcon;
