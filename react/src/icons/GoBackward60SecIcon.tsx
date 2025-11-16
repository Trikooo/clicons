import React from 'react';
import config from '../config';

interface GoBackward60SecIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GoBackward60SecIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/go-backward60-sec)
 * @see {@link https://clicons.dev/icon/go-backward60-sec}
 */
const GoBackward60SecIcon = React.forwardRef<SVGSVGElement, GoBackward60SecIconProps>(
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
      d: 'M16.5049 12.5939C16.5002 11.2197 16.568 10.845 16.3158 10.4018C16.0636 9.9586 15.4332 9.99693 14.8028 9.99693C14.1724 9.99693 13.7402 9.99693 13.446 10.306C13.1139 10.6988 13.2002 11.0997 13.1858 12.5819C13.2002 14.6397 13.0802 15.3597 13.4402 15.6597C13.8002 16.0797 14.2632 15.9838 14.9174 15.9957C15.5669 15.9875 15.9605 16.0197 16.2814 15.6364C16.6368 15.301 16.4648 13.9714 16.5049 12.5939Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.7639 10.992C10.7399 10.26 10.347 9.99597 9.19317 9.99597C7.94647 9.98122 7.51187 10.02 7.49987 11.4C7.49987 12.6 7.49987 12.96 7.49987 14.76C7.49987 16.26 8.63987 15.966 9.23987 16.002C9.71987 15.966 10.7476 16.2375 10.8179 14.7C10.7399 13.26 10.1999 13.26 9.23987 13.26C7.91987 13.26 7.85987 13.26 7.49987 14.069'
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

GoBackward60SecIcon.displayName = 'GoBackward60SecIcon';
export default GoBackward60SecIcon;
