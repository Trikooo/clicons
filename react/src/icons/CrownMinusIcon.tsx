import React from 'react';
import config from '../config';

interface CrownMinusIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CrownMinusIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/crown-minus)
 * @see {@link https://clicons.dev/icon/crown-minus}
 */
const CrownMinusIcon = React.forwardRef<SVGSVGElement, CrownMinusIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.5 3L16.5 3'
    }
  ],
  [
    'path',
    {
      d: 'M5 21H19'
    }
  ],
  [
    'path',
    {
      d: 'M16.8717 18H7.1283C6.10017 18 5.58611 18 5.19623 17.7234C4.80634 17.4468 4.63649 16.9616 4.29679 15.9912L2.05123 9.57668C1.93172 9.22325 2.02503 8.8336 2.29225 8.57016C2.62854 8.23864 3.15545 8.1872 3.55117 8.44727L4.78349 9.25718C6.02739 10.0747 6.64935 10.4835 7.27815 10.3349C7.90696 10.1863 8.28019 9.54241 9.02665 8.25461L11.2412 4.43412C11.3968 4.16567 11.6864 4 12 4C12.3136 4 12.6032 4.16567 12.7588 4.43412L14.9733 8.25461C15.7198 9.54241 16.093 10.1863 16.7218 10.3349C17.3507 10.4835 17.9726 10.0747 19.2165 9.25718L20.4488 8.44727C20.8445 8.1872 21.3715 8.23864 21.7078 8.57016C21.975 8.8336 22.0683 9.22325 21.9488 9.57668L19.7032 15.9912C19.3635 16.9616 19.1937 17.4468 18.8038 17.7234C18.4139 18 17.8998 18 16.8717 18Z'
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

CrownMinusIcon.displayName = 'CrownMinusIcon';
export default CrownMinusIcon;
