import React from 'react';
import config from '../config';

interface LiftTruckIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LiftTruckIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lift-truck)
 * @see {@link https://clicons.dev/icon/lift-truck}
 */
const LiftTruckIcon = React.forwardRef<SVGSVGElement, LiftTruckIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 17.5C7 18.8807 5.88071 20 4.5 20C3.11929 20 2 18.8807 2 17.5C2 16.1193 3.11929 15 4.5 15C5.88071 15 7 16.1193 7 17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 17.5C17 18.8807 15.8807 20 14.5 20C13.1193 20 12 18.8807 12 17.5C12 16.1193 13.1193 15 14.5 15C15.8807 15 17 16.1193 17 17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 4V15.0106C20 15.9433 20 16.4097 20.1522 16.7776C20.4767 17.5617 21.1896 17.9585 22 18'
    }
  ],
  [
    'path',
    {
      d: 'M4 9H5.74643C6.6103 9 7.04224 9 7.43781 9.11037C7.83828 9.22211 8.21115 9.41587 8.53276 9.67935C8.85045 9.93962 9.09871 10.2931 9.59524 11C10.0918 11.7069 10.34 12.0604 10.6577 12.3206C10.9793 12.5841 11.3522 12.7779 11.7527 12.8896C12.1482 13 12.5802 13 13.444 13H15'
    }
  ],
  [
    'path',
    {
      d: 'M18 13H20'
    }
  ],
  [
    'path',
    {
      d: 'M4 15V6C4 4.89543 4.89543 4 6 4H8.89512C9.60829 4 10.2981 4.25406 10.8409 4.71663L14.2972 7.66198C14.7431 8.04197 15 8.59836 15 9.18422V15M7 17.5H12'
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

LiftTruckIcon.displayName = 'LiftTruckIcon';
export default LiftTruckIcon;
