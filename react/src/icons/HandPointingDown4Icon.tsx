import React from 'react';
import config from '../config';

interface HandPointingDown4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandPointingDown4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-down4)
 * @see {@link https://clicons.dev/icon/hand-pointing-down4}
 */
const HandPointingDown4Icon = React.forwardRef<SVGSVGElement, HandPointingDown4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.7554 13.485V19.9954C10.7554 20.8264 10.083 21.5 9.25361 21.5C8.42421 21.5 7.75184 20.8264 7.75184 19.9954V9.96807M10.7554 16.4892L11.8098 16.4624C12.8942 16.4347 13.7589 15.5461 13.7589 14.4593V13.4552M13.4777 15.4844L14.8133 15.4297C15.8977 15.4021 16.7625 14.5134 16.7625 13.4266V12.4226M16.4767 14.4593L18.0171 14.27C19.0164 14.135 19.7591 13.2759 19.7497 12.2657L19.7017 7.06579C19.7017 4.88227 17.5886 2.5 15.3226 2.5H10.4418C9.24956 2.5 7.8322 3.28085 6.60739 5.34841L4.99251 7.78577C4.41226 8.54219 3.58594 9.90362 5.1584 11.7712L7.75184 14.531'
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

HandPointingDown4Icon.displayName = 'HandPointingDown4Icon';
export default HandPointingDown4Icon;
