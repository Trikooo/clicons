import React from 'react';
import config from '../config';

interface Flowchart2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Flowchart2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/flowchart2)
 * @see {@link https://clicons.dev/icon/flowchart2}
 */
const Flowchart2Icon = React.forwardRef<SVGSVGElement, Flowchart2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 6V10M10 12H8C6.11438 12 5.17157 12 4.58579 12.5858C4 13.1716 4 14.1144 4 16V18M6 20H10'
    }
  ],
  [
    'path',
    {
      d: 'M10 4C10 2.34533 10.3453 2 12 2H16C17.6547 2 18 2.34533 18 4C18 5.65467 17.6547 6 16 6H12C10.3453 6 10 5.65467 10 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 12C10 10.3453 10.3453 10 12 10H16C17.6547 10 18 10.3453 18 12C18 13.6547 17.6547 14 16 14H12C10.3453 14 10 13.6547 10 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 20C10 18.3453 10.3453 18 12 18H16C17.6547 18 18 18.3453 18 20C18 21.6547 17.6547 22 16 22H12C10.3453 22 10 21.6547 10 20Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 12C19.8856 12 20.8284 12 21.4142 11.4142C22 10.8284 22 9.88562 22 8C22 6.11438 22 5.17157 21.4142 4.58579C20.8284 4 19.8856 4 18 4'
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

Flowchart2Icon.displayName = 'Flowchart2Icon';
export default Flowchart2Icon;
