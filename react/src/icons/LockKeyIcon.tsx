import React from 'react';
import config from '../config';

interface LockKeyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LockKeyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lock-key)
 * @see {@link https://clicons.dev/icon/lock-key}
 */
const LockKeyIcon = React.forwardRef<SVGSVGElement, LockKeyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 10.9971C17.6078 10.1968 16.5481 9.02153 14.3703 9.07154C14.3703 9.07154 12.6431 8.99652 10.6906 8.99652C8.73815 8.99652 7.82408 9.04224 6.25999 9.07154C5.25872 9.04653 3.35629 9.2716 2.48018 11.3472C1.90445 13.0976 1.87941 16.7736 2.22986 18.6241C2.30496 19.5744 2.80559 20.8998 4.35757 21.6C5.30878 22.1001 6.83573 21.9 7.9872 22.0001M5.98465 8.1963C5.93458 5.82065 5.83445 3.94514 8.58796 2.39472C9.51414 2.01962 10.8909 1.69453 12.5931 2.49475C14.3703 3.57004 14.5917 4.70802 14.7458 4.99543C15.1713 6.12074 14.9461 7.72117 14.9961 8.37135'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 19.7351C15.5 20.9792 14.4911 21.9656 13.2552 21.9656C12.0194 21.9656 11 20.9792 11 19.7351C11 18.4911 12.0194 17.4915 13.2552 17.4915C14.4911 17.4915 15.5 18.4911 15.5 19.7351Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.2251 17.7909L17.2156 15.8482M22.0001 15.8482L20.3731 14.3089C19.6001 13.5692 18.9501 14.2149 18.6264 14.4906L17.2156 15.8482M17.2156 15.8482L18.8251 17.3936'
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

LockKeyIcon.displayName = 'LockKeyIcon';
export default LockKeyIcon;
