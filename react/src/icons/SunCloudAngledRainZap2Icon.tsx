import React from 'react';
import config from '../config';

interface SunCloudAngledRainZap2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SunCloudAngledRainZap2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sun-cloud-angled-rain-zap2)
 * @see {@link https://clicons.dev/icon/sun-cloud-angled-rain-zap2}
 */
const SunCloudAngledRainZap2Icon = React.forwardRef<SVGSVGElement, SunCloudAngledRainZap2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.0784 14.9999L7.30434 17.6837C7.06684 18.043 6.94808 18.2226 7.02165 18.3612C7.09522 18.4999 7.30931 18.4999 7.73747 18.4999H9.26253C9.69069 18.4999 9.90478 18.4999 9.97835 18.6385C10.0519 18.7772 9.93316 18.9568 9.69566 19.3161L7.9216 21.9999'
    }
  ],
  [
    'path',
    {
      d: 'M16 19.9999L15 21.9999'
    }
  ],
  [
    'path',
    {
      d: 'M13 19.9999L12 21.9999'
    }
  ],
  [
    'path',
    {
      d: 'M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494'
    }
  ],
  [
    'path',
    {
      d: 'M17.4776 10.9008C17.485 10.9007 17.4925 10.9007 17.5 10.9007C19.9853 10.9007 22 12.8821 22 15.3263C22 17.2532 20.7478 18.8925 19 19.5M17.4776 10.9008C17.4924 10.7388 17.5 10.5748 17.5 10.409C17.5 7.42169 15.0376 5 12 5C9.12324 5 6.76233 7.17208 6.52042 9.9396M17.4776 10.9008C17.3753 12.0165 16.9286 13.0344 16.2428 13.8511M6.52042 9.9396C3.98398 10.177 2 12.2779 2 14.8345C2 16.4433 2.78555 17.8716 4 18.7687M6.52042 9.9396C6.67826 9.92483 6.83823 9.91727 7 9.91727C8.12582 9.91727 9.16474 10.2832 10.0005 10.9007'
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

SunCloudAngledRainZap2Icon.displayName = 'SunCloudAngledRainZap2Icon';
export default SunCloudAngledRainZap2Icon;
