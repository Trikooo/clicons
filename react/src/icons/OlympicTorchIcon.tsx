import React from 'react';
import config from '../config';

interface OlympicTorchIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name OlympicTorchIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/olympic-torch)
 * @see {@link https://clicons.dev/icon/olympic-torch}
 */
const OlympicTorchIcon = React.forwardRef<SVGSVGElement, OlympicTorchIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 8.94648C10.0112 7.71996 10.5211 6.32069 11.6575 5.3729C14.5106 2.99353 21.2591 6.95603 20.8207 2C24.4804 7.64147 18.4776 7.81928 18.2152 9.83766C18.0664 10.9826 20.1591 11.6114 21.3687 10.6027C21.1245 11.4521 19.5 14.8057 15 13.8206'
    }
  ],
  [
    'path',
    {
      d: 'M8.95445 12.0276C7.83074 10.9039 8.01032 7 8.01032 7L17 15.9897C17 15.9897 13.0961 16.1678 11.9724 15.0441'
    }
  ],
  [
    'path',
    {
      d: 'M8.14822 12L2.24774 19.983C1.87554 20.4866 1.92775 21.1867 2.37054 21.6295C2.81333 22.0722 3.51343 22.1245 4.01701 21.7523L12 15.8518'
    }
  ],
  [
    'path',
    {
      d: 'M7 10L14 17'
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

OlympicTorchIcon.displayName = 'OlympicTorchIcon';
export default OlympicTorchIcon;
