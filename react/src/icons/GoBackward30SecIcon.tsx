import React from 'react';
import config from '../config';

interface GoBackward30SecIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GoBackward30SecIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/go-backward30-sec)
 * @see {@link https://clicons.dev/icon/go-backward30-sec}
 */
const GoBackward30SecIcon = React.forwardRef<SVGSVGElement, GoBackward30SecIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 5L10.8961 3.45459C10.4851 2.87911 10.2795 2.59137 10.4093 2.32411C10.5391 2.05684 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927'
    }
  ],
  [
    'path',
    {
      d: 'M16.7522 12.6C16.7522 11.22 16.8182 10.848 16.5542 10.404C16.2902 9.95998 15.6302 9.99838 14.9702 9.99838C14.3102 9.99838 13.8302 9.95998 13.5122 10.32C13.1222 10.74 13.2902 11.52 13.2422 12.6C13.3502 14.04 13.0562 15.18 13.5062 15.66C13.8302 16.056 14.4053 15.996 15.0902 16.008C15.7701 15.9997 16.1822 16.032 16.5182 15.648C16.8902 15.312 16.7102 13.98 16.7522 12.6Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.24805 11.124C7.38005 10.08 8.22005 9.95999 9.06005 10.002C9.72005 9.97199 10.74 10.02 10.752 11.52C10.74 13.08 9.50405 12.9712 9.50405 12.996C9.50405 13.0208 10.8 12.96 10.752 14.52C10.74 15.9 9.84005 16.044 9.00005 15.996C8.16005 16.056 7.38005 15.84 7.24805 14.88'
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

GoBackward30SecIcon.displayName = 'GoBackward30SecIcon';
export default GoBackward30SecIcon;
