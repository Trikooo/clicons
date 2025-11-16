import React from 'react';
import config from '../config';

interface SwipeLeft6IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeLeft6Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-left6)
 * @see {@link https://clicons.dev/icon/swipe-left6}
 */
const SwipeLeft6Icon = React.forwardRef<SVGSVGElement, SwipeLeft6IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.001 4.49988H21.001M15.001 4.49988C15.001 3.79965 16.9953 2.49141 17.501 1.99988M15.001 4.49988C15.001 5.20011 16.9953 6.50835 17.501 6.99988'
    }
  ],
  [
    'path',
    {
      d: 'M6.51282 13.5147V3.48575C6.51282 2.66411 7.17966 1.99805 8.00225 1.99805C8.82484 1.99805 9.49168 2.66411 9.49168 3.48575V8.68783M9.49168 8.68783V11.0115M9.49168 8.68783C10.2966 7.56941 12.0992 7.94193 12.4829 9.68079C12.4892 9.70965 12.4944 9.73874 12.4986 9.76798M12.5137 11.0075V10.0046C12.5137 9.9255 12.5098 9.84619 12.4986 9.76798M12.4986 9.76798C12.9918 8.41762 15.2563 8.93261 15.5028 10.8609M15.5028 10.8609V12.0069M15.5028 10.8609C15.9068 9.37034 18.5586 10.4121 18.5012 12.1544V15.3329C18.4982 17.059 18.2101 18.3105 17.184 19.34C16.236 20.4718 16.459 21.1053 16.4354 22.0017M6.51282 8.9905C5.19389 10.1843 3.69691 11.8159 3.50578 12.2023C2.61647 13.5544 2.93276 14.6153 4.19658 16.4175C5.13711 17.7587 6.39859 19.2534 6.46467 19.3282C7.13727 20.0896 7.00546 20.6958 7.00546 21.9907'
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

SwipeLeft6Icon.displayName = 'SwipeLeft6Icon';
export default SwipeLeft6Icon;
