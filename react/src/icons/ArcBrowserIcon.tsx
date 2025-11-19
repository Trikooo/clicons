import React from 'react';
import config from '../config';

interface ArcBrowserIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArcBrowserIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arc-browser)
 * @see {@link https://clicons.dev/icon/arc-browser}
 */
const ArcBrowserIcon = React.forwardRef<SVGSVGElement, ArcBrowserIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.5061 13.6018C12.905 13.788 12.2654 13.8885 11.602 13.8885C9.12036 13.8885 6.96846 12.4842 5.93046 10.431C5.48592 9.55161 4.39999 9.19282 3.50496 9.62957C2.60993 10.0663 2.24474 11.1332 2.68928 12.0126C4.3146 15.2277 7.69305 17.444 11.602 17.444C12.8475 17.444 14.0394 17.2191 15.138 16.8084'
    }
  ],
  [
    'path',
    {
      d: 'M18.2384 14.9501C20.013 13.3865 21.2128 11.2053 21.4889 8.75026C21.5987 7.77436 20.8824 6.89583 19.8891 6.78801C18.8958 6.68019 18.0016 7.38391 17.8919 8.35981C17.7555 9.57212 17.2644 10.6794 16.5229 11.5793'
    }
  ],
  [
    'path',
    {
      d: 'M11.5473 3.99976C12.2327 3.99976 12.8592 4.38021 13.1658 4.98249L19.4989 17.427C19.9458 18.3052 19.5835 19.373 18.6897 19.8121C17.7958 20.2512 16.7089 19.8953 16.262 19.0171L11.5473 9.75278L9.6037 13.5719C8.41018 13.1819 7.37371 12.4516 6.61386 11.4964L9.92887 4.98249C10.2354 4.38021 10.8619 3.99976 11.5473 3.99976Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.8326 19.0171C6.38568 19.8953 5.29878 20.2512 4.40494 19.8121C3.5111 19.373 3.1488 18.3052 3.59572 17.427L4.89047 14.8828C5.78379 15.686 6.82705 16.3313 7.97447 16.7733L6.8326 19.0171Z'
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

ArcBrowserIcon.displayName = 'ArcBrowserIcon';
export default ArcBrowserIcon;
