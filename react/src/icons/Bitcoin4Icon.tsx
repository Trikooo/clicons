import React from 'react';
import config from '../config';

interface Bitcoin4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Bitcoin4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin4)
 * @see {@link https://clicons.dev/icon/bitcoin4}
 */
const Bitcoin4Icon = React.forwardRef<SVGSVGElement, Bitcoin4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.9447 18.1667V12.8333M15.5072 12.8333V11.5M15.5072 19.5V18.1667M13.9447 15.5H17.0697M17.0697 15.5C17.5875 15.5 18.0072 15.9477 18.0072 16.5V17.1667C18.0072 17.719 17.5875 18.1667 17.0697 18.1667H13.0072M17.0697 15.5C17.5875 15.5 18.0072 15.0523 18.0072 14.5V13.8333C18.0072 13.281 17.5875 12.8333 17.0697 12.8333H13.0072'
    }
  ],
  [
    'path',
    {
      d: 'M15.5024 9C11.9139 9 9.00476 11.9101 9.00476 15.5C9.00476 19.0898 11.9139 22 15.5024 22C19.0909 22 22.0001 19.0899 22.0001 15.5C22.0001 11.9101 19.0909 9 15.5024 9Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.00503 6C11.3175 6 14.0029 5.10457 14.0029 4C14.0029 2.89543 11.3175 2 8.00503 2C4.69252 2 2.0072 2.89543 2.0072 4C2.0072 5.10457 4.69252 6 8.00503 6Z'
    }
  ],
  [
    'path',
    {
      d: 'M1.99988 4V8.02171V12.0434C1.99988 12.7473 3.17893 13.6328 6.13218 14M2.10721 8.54768C3.31228 9.60965 5.46077 10.0602 7.75693 10.0602M13.9955 4.12134V6.13597'
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

Bitcoin4Icon.displayName = 'Bitcoin4Icon';
export default Bitcoin4Icon;
