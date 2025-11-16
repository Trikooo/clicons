import React from 'react';
import config from '../config';

interface TowTruckIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TowTruckIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tow-truck)
 * @see {@link https://clicons.dev/icon/tow-truck}
 */
const TowTruckIcon = React.forwardRef<SVGSVGElement, TowTruckIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.0021 21C18.1063 21 19.0014 20.1046 19.0014 19C19.0014 17.8954 18.1063 17 17.0021 17C15.898 17 15.0029 17.8954 15.0029 19C15.0029 20.1046 15.898 21 17.0021 21Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.00605 21C8.11019 21 9.00527 20.1046 9.00527 19C9.00527 17.8954 8.11019 17 7.00605 17C5.90192 17 5.00684 17.8954 5.00684 19C5.00684 20.1046 5.90192 21 7.00605 21Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.0039 12L6.00625 3M6.00625 3L8.00547 13M6.00625 3H3.83792C3.64888 3 3.48943 3.16098 3.46601 3.37547L3.13264 6.42857C3.75363 6.42857 4.25704 7.00421 4.25704 7.71429C4.25704 8.42437 3.75363 9 3.13264 9C2.64307 9 2.16217 8.64223 2.00781 8.14286M19.0012 19C21.6834 19 22 18.072 22 15.5125C22 14.2875 22 13.675 21.76 13.1578C21.5094 12.6178 21.0578 12.2814 20.108 11.5931C19.1647 10.9095 18.494 10.141 17.8549 9.08239C16.9435 7.57263 16.4878 6.81775 15.8043 6.40888C15.1209 6 14.3148 6 12.7026 6H12.0039V13'
    }
  ],
  [
    'path',
    {
      d: 'M5.00651 18.996C5.00651 18.996 3.84703 19.0063 3.48717 18.96C3.18729 18.84 2.82289 18.5585 2.58753 18.402C1.86781 17.9235 2.01175 18.12 2.01175 17.688C2.01175 17.0126 2.00768 14.0063 2.00768 14.0063L2.00768 13.0463C2.00768 12.9863 1.946 12.9991 2.40752 13.0063L21.4801 13.0063M9.00508 19.002H15.0027'
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

TowTruckIcon.displayName = 'TowTruckIcon';
export default TowTruckIcon;
