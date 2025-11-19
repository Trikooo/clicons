import React from 'react';
import config from '../config';

interface Touch8IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Touch8Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/touch8)
 * @see {@link https://clicons.dev/icon/touch8}
 */
const Touch8Icon = React.forwardRef<SVGSVGElement, Touch8IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.77888 13.9566V9.49309M7.77888 9.49309V3.97813C7.77888 3.15856 8.46218 2.49805 9.28215 2.49805C10.1021 2.49805 10.7482 3.15856 10.7482 3.97813V7.97397M7.77888 9.49309C6.46416 10.6839 5.04938 12.1882 4.85886 12.5736C3.97239 13.9223 4.06531 14.5753 5.05322 16.2256C5.89231 17.6273 7.02077 19.1829 7.08664 19.2576C7.7571 20.017 7.62379 20.0172 8.59557 20.7303C9.46334 21.3323 11.2633 21.7517 15.483 21.3323C18.9206 20.8015 19.7442 17.8022 19.7263 16.3689V12.8293C19.9405 9.8874 18.7102 9.75461 16.4763 9.46504M10.7482 7.97397V10.4974M10.7482 7.97397C11.3057 7.06531 13.3304 7.43252 13.725 9.1484M13.7606 10.4935V9.49309C13.7606 9.41423 13.7567 9.33512 13.7456 9.2571M13.725 9.1484C13.7266 9.15562 13.7283 9.16286 13.7299 9.17013C13.7362 9.19892 13.7414 9.22793 13.7456 9.2571M13.725 9.1484C13.7291 9.18336 13.7359 9.2196 13.7456 9.2571M13.725 9.1484C13.5848 7.95243 16.6168 8.24397 16.7402 10.3473V11.4904'
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

Touch8Icon.displayName = 'Touch8Icon';
export default Touch8Icon;
