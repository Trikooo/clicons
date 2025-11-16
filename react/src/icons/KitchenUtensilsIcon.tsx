import React from 'react';
import config from '../config';

interface KitchenUtensilsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KitchenUtensilsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/kitchen-utensils)
 * @see {@link https://clicons.dev/icon/kitchen-utensils}
 */
const KitchenUtensilsIcon = React.forwardRef<SVGSVGElement, KitchenUtensilsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.4831 14.0001V3.00006M12.4831 14.0001C10.8247 14.0001 9.48038 15.4355 9.48038 16.6251C9.48038 18.3751 10.8247 21.0001 12.4831 21.0001C14.1414 21.0001 15.4857 18.3751 15.4857 16.6251C15.4857 15.4355 14.1414 14.0001 12.4831 14.0001Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.47841 10.0283L5.47841 21M4.18615 3.12945L3.40347 3.20753C2.83225 3.26452 2.42596 3.78885 2.51382 4.35564L3.1828 8.67118C3.29612 9.40225 3.926 10.0106 4.66644 10.0106H6.2904C7.03083 10.0106 7.66071 9.40225 7.77404 8.67118L8.44301 4.35564C8.53087 3.78885 8.12458 3.26452 7.55336 3.20753L6.77337 3.12962C5.91311 3.04368 5.04642 3.04363 4.18615 3.12945Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.496 13.8182L18.496 3.02594C19.6545 3.34592 21.5815 4.55268 21.9006 7.52842L22.4737 12.0424C22.5743 12.8351 22.3727 13.6261 21.5846 13.7616C20.9244 13.8751 19.9229 13.9122 18.496 13.8182ZM18.496 13.8182L18.496 21.0001'
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

KitchenUtensilsIcon.displayName = 'KitchenUtensilsIcon';
export default KitchenUtensilsIcon;
