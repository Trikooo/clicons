import React from 'react';
import config from '../config';

interface Lamp5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Lamp5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lamp5)
 * @see {@link https://clicons.dev/icon/lamp5}
 */
const Lamp5Icon = React.forwardRef<SVGSVGElement, Lamp5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.9986 14C13.9733 14.8764 14.1964 16.4482 14.7714 17.487C15.3713 18.5704 15.723 19.7991 15.3413 20.9591C15.1382 21.5763 14.5055 22 13.7871 22H10.2249C9.52128 22 8.8984 21.5925 8.68442 20.9921C8.26498 19.8152 8.61274 18.555 9.21506 17.4437C9.76605 16.427 9.99549 14.8804 9.04318 14'
    }
  ],
  [
    'path',
    {
      d: 'M8.50019 14H15.5002'
    }
  ],
  [
    'path',
    {
      d: 'M14.5936 10H9.40637C7.51043 10 6.56247 10 6.16052 9.45157C5.75858 8.90313 6.14759 8.14046 6.92562 6.61512L8.31723 3.88683C8.78446 2.97081 9.01808 2.5128 9.46755 2.2564C9.91703 2 10.4863 2 11.6249 2H12.3751C13.5137 2 14.083 2 14.5324 2.2564C14.9819 2.5128 15.2155 2.97081 15.6828 3.88683L17.0744 6.61512C17.8524 8.14046 18.2414 8.90313 17.8395 9.45157C17.4375 10 16.4896 10 14.5936 10Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.0002 10L12.0002 14'
    }
  ],
  [
    'path',
    {
      d: 'M9.00019 19H15.0002'
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

Lamp5Icon.displayName = 'Lamp5Icon';
export default Lamp5Icon;
