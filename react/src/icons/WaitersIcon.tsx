import React from 'react';
import config from '../config';

interface WaitersIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WaitersIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/waiters)
 * @see {@link https://clicons.dev/icon/waiters}
 */
const WaitersIcon = React.forwardRef<SVGSVGElement, WaitersIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.5 21V15.5C16.5 15.0353 16.5 14.803 16.4616 14.6098C16.3038 13.8164 15.6836 13.1962 14.8902 13.0384C14.697 13 14 13 14 13C13.5 17.9993 9.5 19 9.5 19C9.5 19 5.5 18 5 13C5 13 4.30302 13 4.10982 13.0384C3.31644 13.1962 2.69624 13.8164 2.53843 14.6098C2.5 14.803 2.5 15.0353 2.5 15.5V21'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 13.4998L11.5 12.4998V14.4998L9.5 13.4998ZM9.5 13.4998L7.5 12.5V14.5L9.5 13.4998Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 6.9375V6.0625C12.5 4.37113 11.1569 3 9.5 3C7.84315 3 6.5 4.37113 6.5 6.0625V6.9375C6.5 8.62887 7.84315 10 9.5 10C11.1569 10 12.5 8.62887 12.5 6.9375Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 21V15.5C21.5 15.0353 21.5 14.803 21.4616 14.6098C21.3038 13.8164 20.6836 13.1962 19.8902 13.0384C19.697 13 19.4647 13 19 13'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 3.17426C14.8128 3.06141 15.1494 3 15.5 3C17.1569 3 18.5 4.37113 18.5 6.0625V6.9375C18.5 8.62887 17.1569 10 15.5 10C15.1494 10 14.8128 9.93859 14.5 9.82574'
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

WaitersIcon.displayName = 'WaitersIcon';
export default WaitersIcon;
