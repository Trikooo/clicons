import React from 'react';
import config from '../config';

interface MilkCoconutIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MilkCoconutIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/milk-coconut)
 * @see {@link https://clicons.dev/icon/milk-coconut}
 */
const MilkCoconutIcon = React.forwardRef<SVGSVGElement, MilkCoconutIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.9712 21.9985H8.01002M18.025 8.0386L15.7395 5.21499C15.591 5.03156 15.5122 4.80151 15.517 4.56556L15.5379 3.53212C15.5549 2.69196 14.8785 2.00171 14.0382 2.00171H6.48688C5.65846 2.00171 4.98688 2.67328 4.98688 3.50171V4.94586L2.56347 7.45745C2.20374 7.83026 2.00272 8.32811 2.00272 8.84618V19.9985C2.00272 21.103 2.89814 21.9985 4.00271 21.9985H8.00185H8.01002M18.025 8.0386V10.0815M18.025 8.0386H7.83972M5.02585 4.94586L7.44927 7.45745C7.6141 7.62827 7.74561 7.82535 7.83972 8.0386M8.01002 21.9985V8.84617C8.01002 8.56549 7.95101 8.29075 7.83972 8.0386'
    }
  ],
  [
    'path',
    {
      d: 'M13.2479 18.5748C12.5939 17.9209 13.2566 16.1982 14.7282 14.7271C16.1997 13.2559 17.9229 12.5933 18.577 13.2472M13.2479 18.5748C13.2479 19.1667 13.603 20.1137 14.1361 20.6466C15.9347 22.4447 18.8507 22.4447 20.6493 20.6466C22.4479 18.8485 22.4479 15.9332 20.6493 14.1351C20.1163 13.6022 19.169 13.2472 18.577 13.2472M13.2479 18.5748C13.8115 19.1382 15.1689 18.7241 16.4752 17.6575M18.577 13.2472C19.2309 13.901 18.5683 15.6237 17.0967 17.0949C16.8931 17.2983 16.6849 17.4863 16.4752 17.6575M16.4752 17.6575C16.5836 18.3579 16.8006 19.1667 17.9848 19.7587'
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

MilkCoconutIcon.displayName = 'MilkCoconutIcon';
export default MilkCoconutIcon;
