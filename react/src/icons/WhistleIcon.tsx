import React from 'react';
import config from '../config';

interface WhistleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WhistleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/whistle)
 * @see {@link https://clicons.dev/icon/whistle}
 */
const WhistleIcon = React.forwardRef<SVGSVGElement, WhistleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.10372 11.5252C4.5522 9.4378 7.06815 8.86485 8.53763 9.00054H11.0609C11.5887 9.09126 11.734 9.30978 12.3879 10.3428C12.5068 10.6673 14.4421 10.4487 14.9506 10.5017C15.5091 9.96055 14.9506 8.85082 16.1911 9.00826C18.3195 9.00826 20.359 8.91699 21.2926 9.0542C21.678 9.11085 21.8634 9.45879 21.9189 9.84439C22.1422 11.3942 21.8764 12.5285 21.6192 12.7882C20.9324 14.004 18.9502 15.1828 17.9677 14.9959C15.133 14.9959 14.52 14.9221 14.2742 15.3924L13.4101 17.6267C12.833 18.8562 10.8098 21.283 7.41618 20.9705C4.02257 20.6581 2.54699 17.9449 2.24399 16.6574C1.94099 15.8329 1.65427 13.6141 3.10372 11.5252Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.4893 5.00318V3.00195M10.9942 6.00379L9.99609 5.00318M15.9845 6.00379L16.9826 5.00318'
    }
  ],
  [
    'path',
    {
      d: 'M8.08398 17C9.18855 17 10.084 16.1046 10.084 15C10.084 13.8954 9.18855 13 8.08398 13C6.97941 13 6.08398 13.8954 6.08398 15C6.08398 16.1046 6.97941 17 8.08398 17Z'
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

WhistleIcon.displayName = 'WhistleIcon';
export default WhistleIcon;
