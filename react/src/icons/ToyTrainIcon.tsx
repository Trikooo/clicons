import React from 'react';
import config from '../config';

interface ToyTrainIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ToyTrainIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/toy-train)
 * @see {@link https://clicons.dev/icon/toy-train}
 */
const ToyTrainIcon = React.forwardRef<SVGSVGElement, ToyTrainIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '7',
      cy: '18',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '17',
      cy: '18',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M2 4H13'
    }
  ],
  [
    'path',
    {
      d: 'M6 8H8'
    }
  ],
  [
    'path',
    {
      d: 'M15 12.5H15.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 4V16C3 16.465 3 16.6975 3.05111 16.8882C3.18981 17.4059 3.59413 17.8102 4.11177 17.9489C4.30252 18 4.53501 18 5 18M12 18V4'
    }
  ],
  [
    'path',
    {
      d: 'M9 18H15'
    }
  ],
  [
    'path',
    {
      d: 'M12 10H16.8604C18.2244 10 18.5541 10.2703 18.8216 11.6078C18.9188 12.0942 18.8372 12.466 19.3412 12.5064C20.1829 12.574 20.7739 13.1392 21.0909 13.8787C21.5458 14.9402 22 15.8324 22 17C22 17.4714 22 17.7071 21.8536 17.8536C21.7071 18 21.4714 18 21 18H19'
    }
  ],
  [
    'path',
    {
      d: 'M16 10V7M16 7H15M16 7H17'
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

ToyTrainIcon.displayName = 'ToyTrainIcon';
export default ToyTrainIcon;
