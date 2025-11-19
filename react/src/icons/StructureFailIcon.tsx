import React from 'react';
import config from '../config';

interface StructureFailIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StructureFailIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/structure-fail)
 * @see {@link https://clicons.dev/icon/structure-fail}
 */
const StructureFailIcon = React.forwardRef<SVGSVGElement, StructureFailIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.0157 5C15.0157 3.58579 15.0157 2.87868 15.5273 2.43934C16.0388 2 16.8622 2 18.509 2C20.1557 2 20.9791 2 21.4906 2.43934C22.0022 2.87868 22.0022 3.58579 22.0022 5C22.0022 6.41421 22.0022 7.12132 21.4906 7.56066C20.9791 8 20.1557 8 18.509 8C16.8622 8 16.0388 8 15.5273 7.56066C15.0157 7.12132 15.0157 6.41421 15.0157 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.0157 19C15.0157 17.5858 15.0157 16.8787 15.5273 16.4393C16.0388 16 16.8622 16 18.509 16C20.1557 16 20.9791 16 21.4906 16.4393C22.0022 16.8787 22.0022 17.5858 22.0022 19C22.0022 20.4142 22.0022 21.1213 21.4906 21.5607C20.9791 22 20.1557 22 18.509 22C16.8622 22 16.0388 22 15.5273 21.5607C15.0157 21.1213 15.0157 20.4142 15.0157 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.5412 10.4825L5.52337 13.4949M8.5412 13.4949L5.52337 10.4825'
    }
  ],
  [
    'path',
    {
      d: 'M7.04533 17.0314C9.8101 17.0314 12.0103 14.7709 12.0103 11.9931C12.0103 9.21534 9.76898 6.9635 7.0042 6.9635M7.04533 17.0314C4.28055 17.0314 1.99813 14.7709 1.99813 11.9931C1.99813 9.21534 4.23943 6.9635 7.0042 6.9635M7.04533 17.0314C6.97569 19.1612 8.53182 19.9388 9.63988 19.9795H12.0103M7.0042 6.9635C6.93385 4.80343 8.51708 4.04384 9.63988 3.99609H12.021'
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

StructureFailIcon.displayName = 'StructureFailIcon';
export default StructureFailIcon;
