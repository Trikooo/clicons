import React from 'react';
import config from '../config';

interface SemiTruckIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SemiTruckIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/semi-truck)
 * @see {@link https://clicons.dev/icon/semi-truck}
 */
const SemiTruckIcon = React.forwardRef<SVGSVGElement, SemiTruckIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 13.5H18C17.0572 13.5 16.5858 13.5 16.2929 13.2071C16 12.9142 16 12.4428 16 11.5V8.5M19 13.5V8.5M19 13.5C19.9319 13.5 20.3978 13.5 20.7654 13.6522C21.2554 13.8552 21.6448 14.2446 21.8478 14.7346C22 15.1022 22 15.5681 22 16.5C22 17.4428 22 17.9142 21.7071 18.2071C21.4142 18.5 20.9428 18.5 20 18.5H19.5M16 8.5H13M16 8.5H19M13 8.5V18.5H15.5M13 8.5V5.5H16C16.9319 5.5 17.3978 5.5 17.7654 5.65224C18.2554 5.85523 18.6448 6.24458 18.8478 6.73463C19 7.10218 19 7.56812 19 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M13 5.5C13 4.55719 13 4.08579 12.7071 3.79289C12.4142 3.5 11.9428 3.5 11 3.5'
    }
  ],
  [
    'path',
    {
      d: 'M8 18.5H13V13.5H4C3.05719 13.5 2.58579 13.5 2.29289 13.7929C2 14.0858 2 14.5572 2 15.5V16.5C2 17.4428 2 17.9142 2.29289 18.2071C2.58579 18.5 3.05719 18.5 4 18.5'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 18.5C19.5 19.6046 18.6046 20.5 17.5 20.5C16.3954 20.5 15.5 19.6046 15.5 18.5C15.5 17.3954 16.3954 16.5 17.5 16.5C18.6046 16.5 19.5 17.3954 19.5 18.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 18.5C8 19.6046 7.10457 20.5 6 20.5C4.89543 20.5 4 19.6046 4 18.5C4 17.3954 4.89543 16.5 6 16.5C7.10457 16.5 8 17.3954 8 18.5Z'
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

SemiTruckIcon.displayName = 'SemiTruckIcon';
export default SemiTruckIcon;
