import React from 'react';
import config from '../config';

interface SwipeUp6IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeUp6Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-up6)
 * @see {@link https://clicons.dev/icon/swipe-up6}
 */
const SwipeUp6Icon = React.forwardRef<SVGSVGElement, SwipeUp6IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.5 1.99805V7.99805M18.5 1.99805C17.7998 1.99805 16.4915 3.99235 16 4.49805M18.5 1.99805C19.2002 1.99805 20.5085 3.99235 21 4.49805'
    }
  ],
  [
    'path',
    {
      d: 'M6.51185 13.5147V3.48575C6.51185 2.66411 7.17868 1.99805 8.00127 1.99805C8.82386 1.99805 9.4907 2.66411 9.4907 3.48575V8.68783M9.4907 8.68783V11.0115M9.4907 8.68783C10.2956 7.56941 12.0982 7.94193 12.4819 9.68079C12.4883 9.70965 12.4934 9.73874 12.4976 9.76798M12.5127 11.0075V10.0046C12.5127 9.9255 12.5088 9.84619 12.4976 9.76798M12.4976 9.76798C12.9908 8.41762 15.2553 8.93261 15.5019 10.8609M15.5019 10.8609V12.0069M15.5019 10.8609C15.9058 9.37034 18.5576 10.4121 18.5002 12.1544V15.3329C18.4973 17.059 18.2091 18.3105 17.183 19.34C16.235 20.4718 16.458 21.1053 16.4344 22.0017M6.51185 8.9905C5.19291 10.1843 3.69593 11.8159 3.50481 12.2023C2.61549 13.5544 2.93178 14.6153 4.1956 16.4175C5.13614 17.7587 6.39761 19.2534 6.4637 19.3282C7.1363 20.0896 7.00448 20.6958 7.00448 21.9907'
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

SwipeUp6Icon.displayName = 'SwipeUp6Icon';
export default SwipeUp6Icon;
